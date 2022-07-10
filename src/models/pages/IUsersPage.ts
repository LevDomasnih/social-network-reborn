import {IToken} from "../IToken";
import {IUser} from "../IUser";
import {IProfile} from "../IProfile";
import {IAuth} from "../IAuth";

export interface IUsersPage extends IToken{
    users: (IUser & {
        profile: IProfile
    })[],
    auth: IAuth,
}
