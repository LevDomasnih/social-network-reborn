import {IBase} from "./IBase";
import {IInlineStyleRanges} from "./IInlineStyleRanges";

export interface ITextBlock extends IBase {
    data: Record<string, any>,
    depth: number,
    entityRanges: any[],
    inlineStyleRanges: IInlineStyleRanges[],
    key: string,
    text: string,
    type: string,
}
