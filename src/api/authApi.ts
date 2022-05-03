import {ILogin} from "../models/ILogin";
import {IToken} from "../models/IToken";
import { IRegister } from "../models/IRegister"
import axios from "axios";
import { instance } from "./api"
import {IValid} from "../models/IValid";

export const authApi = {
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
    fieldsExist(fields: { [key: string]: string }) {
        return instance.get<IValid>(`auth/validate`, { params: fields })
            .then(response => response)
            .catch((error) => error.response)
    },
}
