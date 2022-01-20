import {Composer} from 'telegraf';

import ping from './ping';
import {IContext} from "../lib/IContext";

const bot = new Composer<IContext>();

bot.use(
    ping
);

export default bot;