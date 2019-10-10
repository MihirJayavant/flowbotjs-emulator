import { IRoute } from '@flowbotjs/core/dist/interfaces';
import { IBotState } from '../state';
import { basicRoutes } from './basic';

export const routes: IRoute<IBotState>[] = [
    { path: "basic", children: basicRoutes }
];