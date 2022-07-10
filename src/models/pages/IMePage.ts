import {IToken} from "../IToken";
import {IBlog} from "../IBlog";
import {IAuth} from "../IAuth";
import {IUser} from "../IUser";
import {IProfile} from "../IProfile";

export interface IMePage extends IToken {
    auth: IAuth,
    blogs: IBlog[],
    user: {
        profile: IProfile
    } & IUser
}
