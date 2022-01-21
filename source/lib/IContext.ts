import {Context} from 'telegraf';
import DatabaseContext from './store/databaseContext';
import {IUser} from "./store/models/User";

export interface IContext extends Context {
    db: DatabaseContext;
    user: IUser;
}