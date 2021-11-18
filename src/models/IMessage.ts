import {IUser} from "./IUser";
import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IMessage extends ITimeStamps, IBase {
    dialog: string | IUser
    ownerId: string
    text: string
    image: string
    file: string
}