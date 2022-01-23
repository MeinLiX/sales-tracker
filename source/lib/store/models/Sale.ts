export interface ISale {
    id: number;
    url: string;
    description: string;
    domain: string;
    new_price: number;
    old_price: number;
    chatID: number;
    updateDate: Date;
}

export default class Sale implements ISale {
    public id: number;
    public url: string;
    public description: string;
    public domain: string;
    public new_price: number;
    public old_price: number;
    public chatID: number;
    public updateDate: Date;

    constructor(chatID: number, url: string, description: string, domain: string, new_price: number, old_price: number, id: number = 0) {
        this.chatID = chatID;
        this.url = url;
        this.description = description;
        this.domain = domain;
        this.new_price = new_price;
        this.old_price = old_price;
        this.id = id;

        this.updateDate = new Date();
    }

    public UpdateDate(): void {
        this.updateDate = new Date();
    }
}