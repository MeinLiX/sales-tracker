import {IDatabaseTable} from "./IDatabaseTable";
import User, {IUser} from "./models/User";

const sqlite = require("sqlite-sync")

export default class DatabaseUsers implements IDatabaseTable {
    public async tryCreateTable(): Promise<void> {
        sqlite.run(`CREATE TABLE "USERS" ("chatID" INTEGER PRIMARY KEY, "username" TEXT, "first_name" TEXT, "last_name" TEXT, "user_state" INTEGER);`);
    }

    public async add(user: IUser): Promise<boolean> {
        let res: any = sqlite.run(`SELECT chatID FROM USERS WHERE chatID= ?`, [user.chatID]);
        if (res.length !== 0) return false;
        res = sqlite.run(`INSERT INTO USERS(chatID, username, first_name, last_name, user_state) VALUES('${user.chatID}', '${user.username}', '${user.first_name}', '${user.last_name}', '${user.user_state}');`);
        return !res.error;
    }

    public async get(chatID: number): Promise<IUser | null> {
        let res: any = sqlite.run(`SELECT * FROM USERS WHERE chatID= ?`, [chatID]);
        if (res == [] || res.error) return null;
        return new User(res[0].chatID, res[0].username, res[0].first_name, res[0].last_name, res[0].user_state);
    }
}