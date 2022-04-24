import {FC, useState} from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "../LeftSidebar/LeftSidebar.module.css";
import {LeftSidebarElementProps} from "./LeftSidebarElement.props";
import {SvgImage} from "../index";

export const LeftSidebarElement: FC<LeftSidebarElementProps> = ({name, router, route}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <li>
            <Link href={route}>
                <a
                    className='flex items-center hover:text-[#000]'
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <SvgImage svg='user' color={isHover || router.route?.includes(route) ? '#161616' : '#B7B7B7'}
                              className='transition duration-300 ease-in-out'/>
                    <span
                        className={cn('text-lg pl-[16px] font-medium text-[#B7B7B7] transition duration-300 ease-in-out', {
                            [styles.active]: router.route?.includes(route) || isHover
                        })}>{name}</span>
                </a>
            </Link>
        </li>
    )
}
