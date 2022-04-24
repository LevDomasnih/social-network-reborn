import {FC} from "react";
import {TagProps} from "./Tag.props";
import cn from "classnames";
import styles from './Tag.module.css'

export const Tag: FC<TagProps> = ({children, active, ...props}) => {
    return (
        <button className={cn('w-min h-[38px] whitespace-nowrap px-[25px] hover:bg-[#6962A8] hover:text-[#fff] rounded-[20px] duration-300 font-medium text-base bg-white text-[#161616]', {
            [styles.active]: active,
            [styles.notActive]: !active
        })}>
            {children}
        </button>
    )
}
