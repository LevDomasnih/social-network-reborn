import {DetailedHTMLProps, HTMLAttributes} from "react";
import { IPost } from "../../models/IPost"

export interface PostsProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, IPost {
}
