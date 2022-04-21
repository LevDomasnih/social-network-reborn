import React, {forwardRef} from "react";
import {CheckboxProps} from "./Checkbox.props";
import Link from "next/link";
import {defaultError} from "../../store/auth/authSlice";
import {useAppDispatch} from "../../store/hooks";

export const Checkbox = forwardRef(({forgivePassword, ...props}: CheckboxProps) => {
    const dispatch = useAppDispatch()

    const onLink = () => {
        dispatch(defaultError())
    }

    return (
        <div className='flex justify-between'>
            <div>
                <input
                    className="form-check-input appearance-none h-[12px] w-[12px] border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[7px] align-top bg-no-repeat bg-center bg-contain float-left mr-[10px] cursor-pointer"
                    type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label inline-block font-normal text-base" htmlFor="flexCheckDefault">
                    Запомнить меня
                </label>
            </div>
            {forgivePassword && (
                <div>
                    <Link href={'/forgivePassword'}>
                        <a onClick={onLink} className='pl-[8px] text-[#B7B7B7] text-sm'>Забыли пароль?</a>
                    </Link>
                </div>
            )}
        </div>
    )
})
