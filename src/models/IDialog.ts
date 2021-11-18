import {IMessage} from "./IMessage";
import {IUser} from "./IUser";
import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IDialog extends ITimeStamps, IBase {
    owner: string | IUser,
    messages: string[] | IMessage[]
}