import {ForwardedRef, forwardRef, useEffect, useState} from "react";
import {InputProps} from "./Input.props";
import cn from "classnames";
import Image from "next/image";
import styles from './Input.module.css'
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
        <div className={cn(className)}>
            <div className={cn("relative flex w-full flex-wrap items-stretch")}>
            <span className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px]">
                <Image src={props.prefix}  />
            </span>
                <input
                    ref={ref} {...props}
                    type={inputType}
                    placeholder={props.placeholder}
                    className={cn('pb-[10px] placeholder-[#B7B7B7] relative bg-white text-base font-medium border-0 transition duration-300 ease-in-out focus:ring-0 text-[#000] focus:border-black w-full pl-[24px] border-b border-[#B7B7B7]', {
                        [styles.errorInput]: error
                    })}
                />
                {type === 'password'  && (
                    <button onClick={() => setShowPassword(prev => !prev)} className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px] right-0">
                        <Image src={ShowPass}  />
                    </button>
                )}
            </div>
            {error && (
                <div className='text-[#d74d4d] text-sm'>
                    {error.message}
                </div>
            )}
        </div>
    )
})
