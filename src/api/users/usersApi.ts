import {instance} from "../api";
import {UsersDto} from "./usersDto";

const controllerName = 'users'

export const usersApi = {
    getUserById({ id }: UsersDto.GetUserById.Request) {
        return instance.get<UsersDto.GetUserById.Response>(`${controllerName}/${id}`)
            .then(response => response)
            .catch((error) => error.response)
    }
}
