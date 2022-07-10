import axios from "axios";
import {instance} from "../api"
import {AuthDto} from "./authDto";

const controllerName = 'auth'

export const authApi = {
    register(authData: AuthDto.Register.Request) {
        return axios.post<AuthDto.Register.Response>(`/api/register`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },
    login(authData: AuthDto.Login.Request) {
        return axios.post<AuthDto.Login.Response>(`/api/login`, authData)
            .then(response => response)
            .catch((error) => error.response)
    },
    fieldsExist(fields: AuthDto.FieldsExist.Request) {
        return instance.get<AuthDto.FieldsExist.Response>(`${controllerName}/validate`, {params: fields})
            .then(response => response)
            .catch((error) => error.response)
    },
    getAuthUserInfo() {
        return instance.get<AuthDto.GetAuthUserInfo.Response>(`${controllerName}/userInfo`)
            .then(response => response)
            .catch((error) => error.response)
    }
}
