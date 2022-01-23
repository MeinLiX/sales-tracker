import {IDatabaseTable} from "./IDatabaseTable";
import Sale, {ISale} from "./models/Sale";

const sqlite = require("sqlite-sync")

export default class DatabaseSales implements IDatabaseTable {
    public async tryCreateTable(): Promise<void> {
        sqlite.run(`CREATE TABLE "SALES" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "url" TEXT NOT NULL, "description" TEXT NOT NULL, "domain" TEXT NOT NULL, "price_currency" TEXT NOT NULL, "new_price" INTEGER NOT NULL, "old_price" INTEGER NOT NULL, "chatID" INTEGER NOT NULL, "updateDate" DATETIME NOT NULL);`);
    }

    public async add(sale: ISale): Promise<boolean> {
        let res: any = sqlite.run(`SELECT url FROM SALES WHERE url= ?`, [sale.url]);
        if (res.length !== 0) return false;
        res = sqlite.run(`INSERT INTO SALES(id, url, description, domain, price_currency, new_price, old_price, chatID, updateDate) VALUES('${sale.id}', '${sale.url}', '${sale.description}', '${sale.domain}', '${sale.price_currency}', '${sale.new_price}', '${sale.old_price}', '${sale.chatID}', '${sale.updateDate}');`);
        return !res.error;
    }

    public async getAll(chatID: number): Promise<Array<ISale>> {
        let res: any = sqlite.run(`SELECT * FROM SALES WHERE chatID= ?`, [chatID]);
        if (res?.length === 0 || res?.error) return [];

        return (res as Array<ISale>).map((sale: ISale) =>
            new Sale(sale.chatID, sale.url, sale.description, sale.domain, sale.price_currency, sale.new_price, sale.old_price, sale.id, sale.updateDate)
        )
    }
}