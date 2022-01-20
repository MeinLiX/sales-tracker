require('dotenv').config();

import {Telegraf} from 'telegraf';

import {IContext} from "./lib/IContext";
import middlewares from './middlewares';
import Commands from './commands';
import Actions from './actions';

const token = process.env.TOKEN_TG_BOT;

if (token === undefined) {
    throw new Error('Environment TOKEN_TG_BOT undefined!');
}

const bot = new Telegraf<IContext>(token, {telegram: {webhookReply: false}});

bot.use(
    middlewares,
    Commands,
    Actions
);

bot.launch();