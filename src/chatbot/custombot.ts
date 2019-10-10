import { createBot, createStore } from "@flowbotjs/core";
import {  IActivity } from "@flowbotjs/core/dist/interfaces";
import {routes} from './routes'


//dialog creation
// function repeatWords(activity: IActivity): IDialogAction<any> {
//     return {
//         navigateTo: {parent:[], path: 'bye'},
//         message: `You said "${activity.message}"`,
//         state: {}
//     }
// }

// function byeWords(activity: IActivity): IDialogAction<any> {
//   return {
//       message: `Bye!`,
//       state: {}
//   }
// }


// route defining
// const routes: IRoute<any>[] = [
//   { path: "hello", dialog: repeatWords },
//   { path: "bye", dialog: byeWords }
// ];

export const botFactory = (messageFromBot: (activity: IActivity) => void) => createBot({
  id: "123",
  messageFromBot,
  name: "testbot",
  store: createStore<any>({}, routes, { parent: ['basic'], path: "name" })
});