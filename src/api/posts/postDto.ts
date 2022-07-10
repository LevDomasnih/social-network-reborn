import {IPost} from "../../models/IPost";
import {IUser} from "../../models/IUser";

export namespace PostDto {
    export namespace CreatePost {
        export interface Request extends FormData {

        }

        export interface Response {
            owner: IUser,
            text: string,
            parentPosts: null | string[],
            id: string,
            createdAt: string,
            updatedAt: string,
            likes: string[],
            views: string[]
        }
    }

    export namespace GetPosts {
        export interface Request {
            userId: string
        }

        export interface Response extends IPost {

        }
    }

    export namespace ChangeLike {
        export interface Request {
            postId: string
        }

        export interface Response extends IPost {

        }
    }
}
