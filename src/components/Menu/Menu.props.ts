import { DetailedHTMLProps, FC, HTMLAttributes } from "react"
import { IBlog } from "../../models/IBlog"
import { IPost } from "../../models/IPost"

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isTag?: boolean
    menuItems: IMenuItem<IBlog | IPost>[]
}

export interface IMenuItem<DataModel> {
    name: string,
    data: DataModel[],
    component: FC<any>,
    onSelect: (...data: any) => void
}
