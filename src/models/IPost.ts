import {IUser} from "./IUser";
import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IPost extends ITimeStamps, IBase {
    "owner": string | IUser
    "text": string,
    "image": string,
    "likes": number,
    "views": number,
    "comments": string[] | IPost[]
}