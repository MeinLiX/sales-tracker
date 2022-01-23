export interface ISale {
    id: number;
    url: string;
    description: string;
    domain: string;
    price_currency: string
    new_price: number;
    old_price: number;
    chatID: number;
    updateDate: Date;

    ToMessage(forList: boolean): string;

    ToHTML(forList: boolean): string;
}

export default class Sale implements ISale {
    public id: number;
    public url: string;
    public description: string;
    public domain: string;
    public price_currency: string;
    public new_price: number;
    public old_price: number;
    public chatID: number;
    public updateDate: Date;

    constructor(chatID: number, url: string, description: string, domain: string, price_currency: string, new_price: number, old_price: number, id: number = 0, updateDate: Date = new Date()) {
        this.chatID = chatID;
        this.url = url;
        this.description = description;
        this.domain = domain;
        this.price_currency = price_currency;
        this.new_price = new_price;
        this.old_price = old_price;
        this.id = id;
        this.updateDate = updateDate;
    }

    public ToMessage(forList: boolean): string {
        if (forList) return `${this.id}\. ${JSON.stringify(this.description)}\n${JSON.stringify(this.new_price)} ${JSON.stringify(this.price_currency)}\n`;
        else return `${JSON.stringify(this.description)}\n${this.domain}\nOld: ${this.old_price} ${this.price_currency}\nNew: ${this.new_price} ${this.price_currency}`;
    }

    public ToHTML(forList: boolean): string {
        return `${this.id}\. (${this.new_price} ${this.price_currency}) <a href=${JSON.stringify(this.url)}>${JSON.stringify(this.description)}</a>\n`;
    }
}
