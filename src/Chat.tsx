import React, { useEffect, useState, useReducer } from "react";
import { botFactory } from "./custombot";
import { IActivity, IBot } from "@flowbotjs/core/dist/interfaces";

let bot: IBot | undefined = undefined;

export function Chat() {
  const [mess, setMess] = useReducer((state, action) => {
    if (action && action.type === "add") {
      return [action.message, ...state];
    }
    return state;
  }, []);
  const [text, setText] = useState("");

  const onMessRec = (activity: IActivity) => {
    setTimeout(() => {
      setMess({
        type: "add",
        message: { message: activity.message, type: "rec" }
      });
    }, 500);
  };

  useEffect(() => {
    bot = botFactory(onMessRec);
  }, []);

  const getMess = () => {
    return mess.map((p: any, i: any) => {
      const c =
        p.type === "sent" ? "sent-message message" : "rec-message message";
      return (
        <div className="mess-wrapper" key={i}>
          <div className={c} >
            {p.message}
          </div>
        </div>
      );
    });
  };

  const onClick = () => {
    if (text.trim() === "") {
      return;
    }
    setMess({ type: "add", message: { message: text, type: "sent" } });
    setText("");
    bot!.sendMessage({ message: text });
  };

  const onChange = (event: any) => {
    event.persist();
    setText(event.target.value);
  };

  const onKeyDown = (event: any) => {
    event.persist();
    if (event.nativeEvent.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <div className="chat-container">{getMess()}</div>
      <div className="columns m5">
        <div className="column">
          <input
            className="input is-rounded"
            placeholder="Enter Message"
            type="text"
            value={text}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className="column is-narrow">
          <button className="button is-info" onClick={onClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
