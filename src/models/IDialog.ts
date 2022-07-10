import {IMessage} from "./IMessage";
import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IDialog extends ITimeStamps, IBase {
    owner: string
    messages: string[] | IMessage[]
}
