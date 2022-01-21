import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import commandService from "../lib/commandService";

const bot = new Composer<IContext>();

bot.command(commandService.GetFileName(__filename), async (ctx, next) => {
    ctx.reply("pong!");
});

export default bot;