import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import loggerMW from './loggerMW';
import dbMW from './dbMW';

export default new Composer<IContext>().use(
    dbMW,
    loggerMW
);