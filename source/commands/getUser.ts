import {Composer} from 'telegraf';
import {IContext} from "../lib/IContext";
import commandService from "../lib/commandService";
import {IUser} from "../lib/store/models/User";

const bot = new Composer<IContext>();

bot.command(commandService.GetFileName(__filename), async (ctx, next) => {
    let user: IUser | null = await ctx.db.User.get(ctx.message.from.username ?? "");
    console.log(user);
    if (user == null) {
        ctx.reply(`user not found.`);
    } else {
        ctx.reply(`User found: ${user.username}, ${user.chatID}, ${user.updateDate}`);
    }
});

export default bot;