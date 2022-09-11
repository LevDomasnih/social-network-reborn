import {DetailedHTMLProps, FC, HTMLAttributes} from "react"
import {DocumentNode} from "graphql";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isTag?: boolean
    menuItems: IMenuItem[]
}

export interface IMenuItem {
    name: string,
    component: FC<any>,
    query: DocumentNode
}
