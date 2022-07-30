import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface StoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    avatar?: string
    author?: string
    isVideo?: boolean
}
