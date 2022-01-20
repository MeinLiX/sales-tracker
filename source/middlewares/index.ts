import {Composer} from 'telegraf';

import loggerMW from './loggerMW';
import {IContext} from "../lib/IContext";

export default new Composer<IContext>().use(
    loggerMW
);