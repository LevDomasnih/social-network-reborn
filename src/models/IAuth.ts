import {IToken} from "./IToken";

export interface IAuth extends IToken {
    firstName: string;
    lastName: string;
    login: string
    email: string;
    avatar: string | null;
    notifications: number | null;
}
