import {Composer} from 'telegraf';
import {IContext} from "../lib/IContext";
import commandService from "../lib/commandService";
import User, {IUser} from "../lib/store/models/User";

const bot = new Composer<IContext>();

bot.command(commandService.GetFileName(__filename), async (ctx, next) => {
    let user: IUser = new User(ctx.message.from.username ?? "", ctx.message.chat.id, new Date());
    if (await ctx.db.User.add(user)) {
        ctx.reply(`Added user: ${user.username}, ${user.chatID}, ${user.updateDate}`);
    } else {
        ctx.reply(`User not added.`);
    }
});

export default bot;