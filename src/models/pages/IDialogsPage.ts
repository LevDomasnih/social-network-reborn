import {IToken} from "../IToken";
import {IAuth} from "../IAuth";
import {IProfile} from "@/models/IProfile";
import {IUser} from "@/models/IUser";

export interface IDialogsPage extends IToken {
    auth: IAuth
    dialogs: {
        id: string,
        status: string,
        userId: string,
        users: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        }[],
        lastMessage: {
            id: string,
            text: string,
            ownerId: string,
            createAt: Date,
            updateAt: Date
        }
    }[],
    user: {
        profile: IProfile
    } & IUser
}
