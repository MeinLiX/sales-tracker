import {MiddlewareFn} from 'telegraf';
import {IContext} from "../lib/IContext";
import DatabaseContext from '../lib/store/databaseContext';

const databaseMW: MiddlewareFn<IContext> = async (ctx, next) => {
    ctx.db = new DatabaseContext();
    ctx.db.connect();
    await ctx.db.Users.tryCreateTable();
    await ctx.db.Sales.tryCreateTable();

    await next();
}

export default databaseMW