import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { IBlog } from "../../models/IBlog"
import { IPost } from "../../models/IPost"

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isTag?: boolean
    menuItems: MenuItem<IBlog | IPost>[]
}

export interface MenuItem<DataModel> {
    name: string,
    data: DataModel[],
    component: FC<any>,
    onSelect: (...data: any) => void
}
