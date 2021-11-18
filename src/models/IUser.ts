import {IProfile} from "./IProfile";
import {IPost} from "./IPost";
import {IDialog} from "./IDialog";
import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IUser extends ITimeStamps, IBase {
    email: string
    profile: string | IProfile
    follow: string[] | IUser[]
    posts: string[] | IPost[]
    dialogs: string[] | IDialog[]
}