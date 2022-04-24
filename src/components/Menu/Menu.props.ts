import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isTag?: boolean
    posts: any[]
    menu: string[]
}
