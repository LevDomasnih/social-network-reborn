import {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import {IBlog} from "../../models/IBlog";
import {BlogProps} from "../Blog/Blog.props";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isTag?: boolean
    menuItems: MenuItem<IBlog>[]
}

export interface MenuItem<DataModel> {
    name: string,
    data: DataModel[],
    component: FC<any>
}
