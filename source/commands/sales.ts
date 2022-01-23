import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import commandService from "../lib/commandService";
import {ISale} from "../lib/store/models/Sale";

const bot = new Composer<IContext>();

bot.command(commandService.GetFileName(__filename), async (ctx, next) => {
    let sales: Array<ISale> = await ctx.db.Sales.getAll(ctx.user.chatID);

    if (sales.length == 0) return await ctx.reply('No items were found');

    await ctx.replyWithHTML(sales.map((sale: ISale) => sale.ToHTML(true)).reduce((l, r) => l + r),
        {
            disable_web_page_preview: true
        });
});

export default bot;