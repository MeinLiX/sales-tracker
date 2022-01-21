export interface IUser {
    chatID: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    user_state: User_states;
}

export default class User implements IUser {
    public chatID: number;
    public username?: string;
    public first_name?: string;
    public last_name?: string;
    public user_state: User_states;

    constructor(chatID: number, username?: string, first_name?: string, last_name?: string, user_state: User_states = User_states.default) {
        this.chatID = chatID;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_state = user_state;
    }

    public SetState(user_state: User_states = User_states.default): User {
        this.user_state = user_state;
        return this;
    }
}

enum User_states {
    default = 0,
}