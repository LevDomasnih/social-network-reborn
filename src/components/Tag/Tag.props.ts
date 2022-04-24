import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    active?: boolean
}
