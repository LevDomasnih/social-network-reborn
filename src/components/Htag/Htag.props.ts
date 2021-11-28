import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface HtagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
    tag: 'h1' | 'h2' | 'h3'
    children: ReactNode
}