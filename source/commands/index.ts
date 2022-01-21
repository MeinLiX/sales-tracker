import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import ping from './ping';

const bot = new Composer<IContext>();

bot.use(
    ping
);

export default bot;