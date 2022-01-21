import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import ping from './ping';
import addUser from "./addUser";
import getUser from "./getUser";

const bot = new Composer<IContext>();

bot.use(
    ping,
    addUser, //test
    getUser //test
);

export default bot;