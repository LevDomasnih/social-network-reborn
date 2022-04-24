import {ForwardedRef, forwardRef} from "react";
import {SearchProps} from "./Search.props";
import cn from "classnames";
import Image from "next/image";
import {SvgImage} from "../SvgImage/SvgImage";

export const Search = forwardRef(({className, type, ...props}: SearchProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div className={cn('w-full', className)}>
            <div className={cn("relative flex  flex-wrap items-stretch ")}>
                <input
                    ref={ref} {...props}
                    placeholder={props.placeholder}
                    className={cn('pl-[16px] rounded-full overflow-hidden py-[10px] placeholder-[#B6B6B6] text-[#161616] relative bg-[#FAFAFA] text-sm transition duration-300 ease-in-out focus:ring-0 text-[#000] focus:border-black w-full border-2  border-[#E4E4E4]')}
                />
                <div
                    className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px] right-0 pr-[16px]">
                    <SvgImage svg='search' color='#B7B7B7' />
                </div>
            </div>
        </div>
    )
})
