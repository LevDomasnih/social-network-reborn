import {IProfile} from "./IProfile";

export interface IMe {
    token: string
    user: {
        email: string
        id: string
        login: string
        profile: IProfile
    }
}
