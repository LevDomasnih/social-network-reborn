import { instance } from "./api"
import {ILogin} from "../models/ILogin";
import {IUser} from "../models/IUser";
import {IToken} from "../models/IToken";
import { IRegister } from "../models/IRegister"
import axios from "axios";

export const authAPI = {
    register(authData: IRegister) {
        return instance.post<IUser>(`auth/register`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },
    login(authData: ILogin) {
        return axios.post<IToken>(`/api/login`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },

}
