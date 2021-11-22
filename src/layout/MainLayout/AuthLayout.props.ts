import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface AuthLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}