import {IBlog} from "./IBlog";
import {IPost} from "./IPost";

export interface IRecords {
    blogs: IBlog[],
    posts: IPost[],
    postsSaved: IPost[],
    postsLiked: IPost[],
}
