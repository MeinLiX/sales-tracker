import {Composer} from 'telegraf';
import {IContext} from "../lib/IContext";

const bot = new Composer<IContext>();

bot.on('text', async (ctx, next) => {
    const url = ctx.message.text;
    //TODO logic
    ctx.reply(url);
});

export default bot;