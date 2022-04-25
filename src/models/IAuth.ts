import {IToken} from "./IToken";

export interface IAuth extends IToken {
    login: string | null
    email: string | null
}
