import { instance,  ResponseType} from "./api"
import {IAuth} from "../models/IAuth";
import {IUser} from "../models/IUser";
import {IToken} from "../models/IToken";

export const authAPI = {
    register(authData: IAuth) {
        return instance.post<ResponseType<IUser>>(`auth/login`, authData)
            .then(response => response.data)
    },
    login(authData: IAuth) {
        return instance.post<ResponseType<IToken>>(`auth/login`, authData)
            .then(response => response.data)
            .catch((error) => { throw error.response.data })
    },

}