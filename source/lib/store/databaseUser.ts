import {IDatabaseTable} from "./IDatabaseTable";
import User, {IUser} from "./models/User";

const sqlite = require("sqlite-sync")

export default class DatabaseUser implements IDatabaseTable {
    public async tryCreateTable(): Promise<void> {
        sqlite.run(`CREATE TABLE USERS (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, chatID INTEGER NOT NULL, updateDate DATETIME);`);
    }

    public async add(user: IUser): Promise<boolean> {
        try {
            let res = sqlite.run(`SELECT username FROM USERS WHERE chatID= ?`, [user.chatID]);
            if (res.length !== 0) return false;

            sqlite.run(`INSERT INTO USERS(username, chatID, updateDate) VALUES('${user.username}', '${user.chatID}', '${user?.updateDate?.toISOString()}');`);
            return true;
        } catch (e) {

        }
        return false;
    }

    public async get(username: string): Promise<IUser | null> {
        try {
            let result = sqlite.run(`SELECT * FROM USERS WHERE username= ? `, [username]);
            if (result == []) return null;
            return new User(result[0].username, result[0].chatID, new Date(result[0].updateDate), result[0].id);
        } catch (e) {
        }
        return null;
    }
}