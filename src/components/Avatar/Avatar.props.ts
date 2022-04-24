import {DetailedHTMLProps, HTMLAttributes} from "react";
import {Property} from "csstype";

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    img: string
    width: number
    height: number
    classname?: string
    objectFit?: Property.ObjectFit
}
