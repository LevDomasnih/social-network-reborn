import {FC} from "react";
import {ButtonProps} from "./Button.props";
import cn from "classnames";

export const Button: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cn('w-full bg-[#6962A8] text-[#fff] h-[38px] rounded-[38px]', className)}>
            {children}
        </button>
    )
}
