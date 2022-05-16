import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IPost} from "../../models/IPost";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isTag?: boolean
    posts: IPost[]
    menu: string[]
}
