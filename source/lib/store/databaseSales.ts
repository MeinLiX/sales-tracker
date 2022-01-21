import {IDatabaseTable} from "./IDatabaseTable";

const sqlite = require("sqlite-sync")

export default class DatabaseSales implements IDatabaseTable {
    public async tryCreateTable(): Promise<void> {
        sqlite.run(`CREATE TABLE "SALES" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "url" TEXT NOT NULL, "description" TEXT NOT NULL, "domain" TEXT NOT NULL, "new_price" INTEGER NOT NULL, "old_price" INTEGER NOT NULL, "chatID" INTEGER NOT NULL, "updateDate" DATETIME NOT NULL);`);
    }
}