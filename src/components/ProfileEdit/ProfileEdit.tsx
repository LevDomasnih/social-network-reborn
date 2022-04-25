import React, {FC} from "react";
import {ProfileEditProps} from "./ProfileEdit.props";
import {Input} from "../Input/Input";
import cn from "classnames";
import {useFormContext} from "react-hook-form";
import {IProfile} from "../../models/IProfile";

export const ProfileEdit: FC<ProfileEditProps> = ({setIsEdit, profile, className, ...props}) => {
    const {register, getFieldState} = useFormContext<IProfile>()
    console.log({...register('firstName')})


    return (
        <div className={cn('grid grid-cols-4 gap-3', className)}>
            <Input {...register('firstName')} className='col-span-2' value={''} placeholder='Имя'/>
            <Input {...register('lastName')} className='col-span-2' value={''} placeholder='Фамилия'/>
            <Input {...register('secondName')} className='col-span-4' value={''} placeholder='Отчество'/>
            <Input {...register('birthday')} className='col-span-1' value={''} prefixImg='cake'
                   placeholder='Дата рождения'/>
            <Input {...register('login')} className='col-span-1' value={''} prefix='@' placeholder='логин'/>
            <Input {...register('country')} className='col-span-1' value={''} prefixImg='geo' placeholder='Страна'/>
            <Input {...register('city')} className='col-span-1' value={''} prefixImg='geo' placeholder='Город'/>
            <Input {...register('status')} className='col-span-4' value={''} placeholder='Статус'/>
        </div>
    )
}
