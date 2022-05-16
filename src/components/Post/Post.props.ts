import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IPost} from "../../models/IPost";

export interface PostProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, IPost{
}
