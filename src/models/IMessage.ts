import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IMessage extends ITimeStamps, IBase {
    dialog: string
    ownerId: string
    text: string
    image: string
    file: string
}
