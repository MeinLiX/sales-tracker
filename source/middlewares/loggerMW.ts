import {MiddlewareFn} from 'telegraf';
import {IContext} from "../lib/IContext";

const loggerMW: MiddlewareFn<IContext> = async (ctx, next) => {
    ctx.state.time = new Date().getTime();
    try {
        await next();
    } catch (e) {
        console.error(e);
    } finally {
        const ResponseTimeMS = new Date().getTime() - ctx.state.time;
        console.log(`\n{${new Date().toLocaleString()}} (ID:${ctx.update.update_id}, ${ResponseTimeMS} ms)>\n\tUser: ${ctx.from?.username} (${ctx.from?.id})\n\n`); //TODO
    }
}

export default loggerMW