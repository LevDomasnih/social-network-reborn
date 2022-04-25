import {ForwardedRef, forwardRef, useEffect, useState} from "react";
import {InputProps} from "./Input.props";
import cn from "classnames";
import styles from './Input.module.css'
import {SvgImage} from "../index";

export const Input = forwardRef(({
                                     className,
                                     error,
                                     fontSize,
                                     weight,
                                     type,
                                     prefixImg,
                                     value,
                                     prefix,
                                     inputStyle,
                                     ...props
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [inputType, setInputType] = useState('text')
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        if (value?.length > 0) {
            setIsFilled(true)
        } else {
            setIsFilled(false)
        }
    }, [value])

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
        <div className={cn('relative', className)}>
            <div className={cn("relative flex w-full flex-wrap items-stretch")}>
                {(prefixImg || prefix) && (
                    <span className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center top-1/2 transform -translate-y-1/2 transition duration-300 ease-in-out">
                        {prefixImg && <SvgImage svg={prefixImg} color={isFocus || isFilled ? '#161616' : '#B7B7B7'} className='transition duration-300 ease-in-out'/>}
                        {prefix && <span className={cn('transition duration-300 ease-in-out text-[#B7B7B7]', {
                            [styles.activePrefix]: isFocus || isFilled,
                        })}>{prefix}</span>}
                    </span>
                )}
                <input
                    ref={ref} {...props}
                    type={inputType}
                    placeholder={props.placeholder}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    className={cn('py-[10px] placeholder-[#B7B7B7] relative bg-white text-base font-medium border-0 transition duration-300 ease-in-out focus:ring-0 text-[#161616] focus:border-black w-full pl-[24px] border-b border-[#B7B7B7]', {
                        [styles.errorInput]: error,
                        [styles.active]: isFocus || isFilled,
                        [styles.notPrefix]: !prefix && !prefixImg,
                    })}
                    style={inputStyle}
                />
                {type === 'password' && (
                    <button type='button' onClick={() => setShowPassword(prev => !prev)}
                            className="z-10 leading-snug font-normal absolute text-center text-[#B7B7B7] absolute bg-transparent rounded text-base items-center justify-center bottom-[10px] right-0">
                        <SvgImage svg='showPass' color={isFocus || isFilled ? '#161616' : '#B7B7B7'}
                                  className='transition duration-300 ease-in-out'/>
                    </button>
                )}
            </div>
            {error && (
                <div className='absolute mt-1 text-[#d74d4d] text-sm'>
                    {error.message}
                </div>
            )}
        </div>
    )
})
