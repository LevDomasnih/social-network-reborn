import {IProfile} from "./IProfile";
import {IBlog} from "./IBlog";

export interface IMe {
    token: string,
    auth: {
        email: string,
        id: string,
        login: string,
        profile: IProfile,
    }
    blogs: IBlog[],
}
