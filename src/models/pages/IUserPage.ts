import {IToken} from "../IToken";
import {IAuth} from "../IAuth";
import {IBlog} from "../IBlog";
import {IProfile} from "../IProfile";
import {IUser} from "../IUser";

export interface IUserPage extends IToken {
    auth: IAuth,
    blogs: IBlog[],
    user: {
        profile: IProfile
    } & IUser
}
