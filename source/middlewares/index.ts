import {Composer} from 'telegraf';

import {IContext} from "../lib/IContext";
import loggerMW from './loggerMW';
import dbMW from './dbMW';
import userMW from "./userMW";

export default new Composer<IContext>().use(
    dbMW,
    loggerMW,
    userMW
);