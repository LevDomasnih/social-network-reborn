import {IProfile} from "./IProfile";
import {IBlog} from "./IBlog";

export interface IMe {
    token: string
    me: {
        user: {
            email: string
            id: string
            login: string
        },
        profile: IProfile,
        blogs: IBlog[]
    }
}
