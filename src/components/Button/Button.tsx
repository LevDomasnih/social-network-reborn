import {FC} from "react";
import {ButtonProps} from "./Button.props";
import cn from "classnames";
import styles from './Button.module.css'

export const Button: FC<ButtonProps> = ({theme , children, className, ...props}) => {
    return (
        <button className={cn('w-full h-[38px] rounded-[38px] duration-300 font-medium text-base', className, {
            [styles.light]: theme === 'light',
            [styles.dark]: !theme || theme === 'dark',
        })}>
            {children}
        </button>
    )
}
