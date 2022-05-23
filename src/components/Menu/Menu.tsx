import {MenuItem, MenuProps} from "./Menu.props";
import React, {FC, useState} from "react";
import cn from "classnames";
import styles from './Menu.module.css'
import {Blog} from "../index";
import {Tag} from "../Tag/Tag";
import {BlogProps} from "../Blog/Blog.props";
import {IBlog} from "../../models/IBlog";

export const Menu: FC<MenuProps> = ({isTag, className, menuItems, ...props}) => {
    const [activeMenu, setActiveMenu] = useState(0)

    const items = (menuItems: MenuItem<IBlog>[]) => {
        const activeItem = menuItems.find((item, i) => i === activeMenu)
        if (!activeItem) {
            return <></>
        }
        const Component = activeItem.component
        return activeItem.data.map(el => {
            return <Component key={el.id} {...el} />
        })
    }

    return (
        <div className='space-y-[30px]'>
            <div className='w-full pb-[21px] border-b-[#E4E4E4] border-b-[1px] flex'>
                {menuItems.map((e, i, arr) => (
                    <div key={e.name} className='flex items-center'>
                        <a onClick={() => setActiveMenu(i)}
                           className={cn('text-lg font-medium text-[#E4E4E4] hover:text-[#161616] cursor-pointer transition duration-300 ease-in-out', {
                               [styles.active]: i === activeMenu
                           })}>{e.name}</a>
                        {arr.length - 1 !== i && (
                            <div className='w-[1px] h-[12px] mx-[25px] bg-[#E4E4E4]'></div>
                        )}
                    </div>
                ))}
            </div>
            {isTag && (
                <div className='py-[10px] space-y-[30px] flex flex-col text-lg font-normal'>
                    <div>Статьи авторов, которые вам могут понравиться</div>
                    <div className='space-x-[15px]'>
                        <Tag active={true}>Все</Tag>
                        <Tag>UX / UI</Tag>
                        <Tag>Бизнес</Tag>
                        <Tag>Разработка</Tag>
                        <Tag>Музыка</Tag>
                        <Tag>Здоровье</Tag>
                    </div>
                </div>
            )}
            {menuItems && items(menuItems)}
        </div>
    )
}
