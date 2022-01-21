import {Composer} from "telegraf";

import {IContext} from "../lib/IContext";
import textHandler from './textHandler';

export default new Composer<IContext>().use(
    textHandler
)