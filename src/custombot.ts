import { createBot, createStore } from "@flowbotjs/core";
import { IBot, IRoute, IActivity, IDialogAction } from "@flowbotjs/core/dist/interfaces";


//dialog creation
function repeatWords(activity: IActivity): IDialogAction<any> {
    return {
        message: `You said "${activity.message}"`,
        state: {}
    }
}


// route defining
const routes: IRoute<any>[] = [
  { path: "hello", dialog: repeatWords }
];

export const botFactory = (messageFromBot: (activity: IActivity) => void) => createBot({
  id: "123",
  messageFromBot,
  name: "testbot",
  store: createStore<any>({}, routes, { parent: [], path: "hello" })
});