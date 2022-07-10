import {IUser} from "../../models/IUser";
import {IProfile} from "../../models/IProfile";

export namespace UsersDto {
    export namespace GetUserById {
        export interface Request {
            id: string
        }

        export interface Response extends IUser {
            profile: IProfile
        }
    }
}
