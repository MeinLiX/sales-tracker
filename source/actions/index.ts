import {Composer} from "telegraf";
import textHandler from './textHandler';
import {IContext} from "../lib/IContext";

export default new Composer<IContext>().use(
    textHandler
)