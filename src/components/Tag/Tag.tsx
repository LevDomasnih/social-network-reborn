import {FC} from "react";
import {TagProps} from "./Tag.props";
import cn from "classnames";

export const Tag: FC<TagProps> = ({children, className, ...props}) => {
    return (
        <div className={cn('font-medium text-sm px-[15px] py-[7px] w-fit bg-[#F5F7F9] text-[#161616] rounded-full overflow-hidden', className)}>
            {children}
        </div>
    )
}
