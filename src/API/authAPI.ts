import {ILogin} from "../models/ILogin";
import {IToken} from "../models/IToken";
import { IRegister } from "../models/IRegister"
import axios from "axios";
import { instance } from "./api"

export const authAPI = {
    register(authData: IRegister) {
        return axios.post<IToken>(`/api/register`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },
    login(authData: ILogin) {
        return axios.post<IToken>(`/api/login`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },
    emailExist(email: string) {
        return instance.post<boolean>(`auth/validate`, { email })
            .then(response => response)
            .catch((error) => error.response)
    },
}