import {IProfile} from "./IProfile";
import {IPost} from "./IPost";

export interface IMe {
    token: string
    me: {
        user: {
            email: string
            id: string
            login: string
        },
        profile: IProfile,
        allPosts: IPost[]
    }
}
