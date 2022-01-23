import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import ping from './ping';
import sales from "./sales";

const bot = new Composer<IContext>();

bot.use(
    ping,
    sales
);

export default bot;