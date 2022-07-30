import {IBase} from "./IBase";

export interface IPost extends IBase {
    text: string,
    likes: number,
    views: number,
    isLiked: boolean,
    mainImage: string | null
    comments: unknown[]
    profile: {
        avatar: string | null
        firstName: string | null
        lastName: string | null
        middleName: string | null
    },
}
