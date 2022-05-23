import {IBase} from "./IBase";
import {ITextBlock} from "./ITextBlock";

export interface IBlog extends IBase {
    entityMap: Record<string, any>
    likes: number
    views: number
    textBlocks: ITextBlock[]
    mainImage: string | null
    comments: unknown[]
    profile: {
        avatar: string | null
        firstName: string | null
        lastName: string | null
        middleName: string | null
    }
}
