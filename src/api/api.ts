import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3000',
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: ResultCodesEnum
}
