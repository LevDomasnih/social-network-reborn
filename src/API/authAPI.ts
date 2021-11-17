import { instance,  ResponseType} from "./api"

type auth = {
    email: string
    password: string
}

export const authAPI = {
    register({ email, password }: auth) {

    },
    login(authData: auth) {
        return instance.post<ResponseType<auth>>(`auth/login`, [])
    },

}