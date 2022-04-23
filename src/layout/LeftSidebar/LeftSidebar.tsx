import {FC} from "react";
import {LeftSidebarProps} from "./LeftSidebar.props";
import cn from "classnames";
import {useRouter} from "next/router";
import {LeftSidebarElement} from "../LeftSidebarElement/LeftSidebarElement";

export const LeftSidebar: FC<LeftSidebarProps> = ({className, ...props}) => {

    const router = useRouter()

    const temp = [
        {route: '/me', name: 'Мой профиль', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/articles', name: 'Статьи', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/inspiration', name: 'Вдохновение', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/tutorial', name: 'Туториалы', img: '/svg/user.svg', height: 15, width: 15},
    ]
    return (
        <div className={cn('flex-1 flex mt-[40px]', className)}>
            <ul className='space-y-[30px]'>
                {temp.map(element => <LeftSidebarElement key={element.route} route={element.route} name={element.name} router={router}/>)}
            </ul>
        </div>
    )
}



