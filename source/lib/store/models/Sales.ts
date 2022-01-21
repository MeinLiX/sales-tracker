export interface ISales {
    id: number;
    url: string;
    description: string;
    domain: string;
    new_price: number;
    old_price: number;
    chatID: number;
    updateDate?: Date;
}

//export default class Sales implements ISales{

//}