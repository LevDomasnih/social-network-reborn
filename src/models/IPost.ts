import {IBase} from "./IBase";
import {ITextBlock} from "./ITextBlock";

export interface IPost extends IBase {
    headers: string[],
    entityMap: Record<string, any>,
    likes: number,
    views: number,
    textBlocks: ITextBlock[]
    mainImage: string,
    //TODO comments
}
