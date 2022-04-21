import {FC} from "react";
import {LeftSidebarProps} from "./LeftSidebar.props";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

export const LeftSidebar: FC<LeftSidebarProps> = ({className, ...props}) => {
    const temp = [
        {route: 'me', name: 'Мой профиль', img: '/svg/user.svg', height: 15, width: 15},
        {route: 'articles', name: 'Статьи', img: '/svg/user.svg', height: 15, width: 15},
        {route: 'inspiration', name: 'Вдохновение', img: '/svg/user.svg', height: 15, width: 15},
        {route: 'tutorial', name: 'Туториалы', img: '/svg/user.svg', height: 15, width: 15},
    ]
    return (
        <div className={cn('flex-1 flex mt-[40px]', className)}>
            <ul className='space-y-[30px]'>
                {temp.map(e => (
                    <li key={e.route}>
                        <Link href={e.route}>
                            <a className='flex items-center'>
                                <Image src={e.img} height={e.height} width={e.width} />
                                <span className='text-lg pl-[16px] font-medium text-[#B7B7B7]'>{e.name}</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
