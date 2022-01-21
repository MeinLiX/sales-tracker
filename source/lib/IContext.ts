import { Context } from 'telegraf';
import DatabaseContext from './store/databaseContext';

export interface IContext extends Context {
    db: DatabaseContext;
}