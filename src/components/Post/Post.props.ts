import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface PostProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    icon: string
    theme: string
    avatar: string
    author: string
    title: string
    text: string
    likes: number
    comments: number
    reposts: number
    image: string
    time: Date
}
