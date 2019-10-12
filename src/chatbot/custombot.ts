import { createBot, createStore, IActivity, IStore } from "@flowbotjs/core";
import { routes } from "./routes";
import { IBotState } from "./state";

export const botFactory = (
  messageFromBot: (activity: IActivity) => void,
  onStoreChange: (state: IStore<IBotState>) => void,
  onError: (error: Error) => void
) =>
  createBot<IBotState>({
    id: "123",
    messageFromBot,
    onStoreChange,
    onError,
    name: "testbot",
    store: createStore<any>({}, routes, { parent: ["basic"], path: "name" })
  });
