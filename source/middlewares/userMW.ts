import {MiddlewareFn} from 'telegraf';

import {IContext} from "../lib/IContext";
import User, {IUser} from "../lib/store/models/User";

const userMW: MiddlewareFn<IContext> = async (ctx, next) => {
    let user: IUser | null = await ctx.db.Users.get(ctx.chat!.id);
    if (user == null) {
        user = new User(ctx.chat!.id, ctx.message?.from.username, ctx.message?.from.first_name, ctx.message?.from.last_name);
        if (!(await ctx.db.Users.add(user))) throw new Error("User not able added to db");
    }
    ctx.user = user;
    await next();
}

export default userMW