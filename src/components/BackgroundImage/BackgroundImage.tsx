import Image from "next/image";
import {SvgImage} from "../SvgImage/SvgImage";
import React, {ForwardedRef, forwardRef} from "react";
import {BackgroundImageProps} from "./BackgroundImage.props";
import cn from "classnames";

export const BackgroundImage = forwardRef(({onChange, isEdit, className, src, ...props}: BackgroundImageProps, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <div className={cn(className)} {...props}>
            {ref && <input type='file' ref={ref} onChange={onChange} className='invisible absolute'/>}
            {src ? (
                <Image src={src} layout='fill' objectFit='cover' objectPosition='center' />
            ) : (
                <div style={{width: '100%', height: '100%', backgroundColor: '#93c3e3'}}>
                    <div className='h-full w-full bg-opacity-50 bg-black absolute flex items-center justify-center '>
                        <SvgImage svg='gallery' color='#FFF' className='h-[40px] w-[40px]' />
                    </div>
                </div>
            )}
            {isEdit && (
                <div className='h-full w-full bg-opacity-50 bg-black absolute flex items-center justify-center '>
                    <SvgImage svg='gallery' color='#FFF' className='h-[40px] w-[40px]' />
                </div>
            )}
        </div>
    )
})
