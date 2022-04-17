import {ForwardedRef, forwardRef, useEffect, useState} from "react";
import {InputProps} from "./Input.props";
import cn from "classnames";
import Image from "next/image";
import ShowPass from '../../../public/svg/showPass.svg'

export const Input = forwardRef(({className, error, fontSize, weight, type, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState('text')

    useEffect(() => {
        if (type === 'password') {
            if (showPassword) {
                setInputType('text')
            } else {
                setInputType('password')
            }
        }
    }, [showPassword, type])

    return (
        <div className={cn("relative flex w-full flex-wrap items-stretch", className)}>
            <span className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px]">
                <Image src={props.prefix}  />
            </span>
            <input
                ref={ref} {...props}
                type={inputType}
                placeholder={props.placeholder}
                className={cn('pb-[10px] placeholder-[#B7B7B7] text-[#B7B7B7] relative bg-white text-sm border-0 outline-none focus:outline-none w-full pl-[24px] border-b border-[#B7B7B7]')}
            />
            {type === 'password'  && (
                <button onClick={() => setShowPassword(prev => !prev)} className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px] right-0">
                    <Image src={ShowPass}  />
                </button>
            )}
        </div>
    )
})
