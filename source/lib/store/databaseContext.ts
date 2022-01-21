import DatabaseUsers from "./databaseUsers";
import DatabaseSales from "./databaseSales";

const sqlite = require("sqlite-sync")

export default class DatabaseContext {
    public Users: DatabaseUsers;
    public Sales: DatabaseSales;

    constructor() {
        this.connect();
        this.Users = new DatabaseUsers();
        this.Sales = new DatabaseSales();
    }

    public connect(): void {
        sqlite.connect('./sales.db');
    }
}