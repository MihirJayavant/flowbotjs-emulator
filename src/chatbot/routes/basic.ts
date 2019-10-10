import { IRoute } from "@flowbotjs/core/dist/interfaces";
import { IBotState } from "../state";
import { askName, askAge, checkAge } from "../dialogs";

export const basicRoutes: IRoute<IBotState>[] = [
    { path: "name", dialog: askName },
    { path: "age", dialog: askAge },
    { path: "checkAge", dialog: checkAge }
];