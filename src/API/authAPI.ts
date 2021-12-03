import { instance,  ResponseType} from "./api"
import {ILogin} from "../models/ILogin";
import {IUser} from "../models/IUser";
import {IToken} from "../models/IToken";
import { IRegister } from "../models/IRegister"

export const authAPI = {
    register(authData: IRegister) {
        return instance.post<ResponseType<IUser>>(`auth/register`, authData)
            .then(response => response.data)
    },
    login(authData: ILogin) {
        return instance.post<ResponseType<IToken>>(`auth/login`, authData)
            .then(response => response.data)
            .catch((error) => { throw error.response.data })
    },

}