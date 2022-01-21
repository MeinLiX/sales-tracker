import DatabaseUser from "./databaseUser";

const sqlite = require("sqlite-sync")

export default class DatabaseContext {
    public User: DatabaseUser;

    constructor() {
        this.connect();
        this.User = new DatabaseUser();
    }

    public connect(): void {
        sqlite.connect('./sales.db');
    }
}