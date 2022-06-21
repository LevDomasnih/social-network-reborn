import {Property} from "csstype";

export interface AvatarProps {
    img: string
    width: number
    height: number
    classname?: string
    objectFit?: Property.ObjectFit
}
