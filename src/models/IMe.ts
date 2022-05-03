import {IProfile} from "./IProfile";

export interface IMe {
    token: string
    me: {
        user: {
            email: string
            id: string
            login: string
        },
        profile: IProfile
    }
}
