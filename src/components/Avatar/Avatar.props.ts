import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    img: string
    width: number
    height: number
    classname?: string
}
