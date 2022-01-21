export interface IUser {
    id: number;
    username: string;
    chatID: number;
    updateDate?: Date;
}

export default class User implements IUser {
    public id: number;
    public username: string;
    public chatID: number;
    public updateDate?: Date;

    constructor(username: string, chatID: number, updateDate?: Date, id: number = 0) {
        this.username = username;
        this.chatID = chatID;
        this.updateDate = updateDate;
        this.id = id
    }
}