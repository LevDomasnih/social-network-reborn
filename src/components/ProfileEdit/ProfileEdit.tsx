import React, {FC} from "react";
import {ProfileEditProps} from "./ProfileEdit.props";
import {Input} from "../Input/Input";
import cn from "classnames";
import {Controller, useFormContext} from "react-hook-form";
import {IProfile} from "../../models/IProfile";
import {InputDate} from "../InputDate/InputDate";

export const ProfileEdit: FC<ProfileEditProps> = ({setIsEdit, profile, className, ...props}) => {
    const {control} = useFormContext<IProfile>()

    return (
        <div className={cn('grid grid-cols-4 gap-3', className)}>
            <Controller
                control={control}
                name="firstName"
                render={({field}) => (
                    <Input className='col-span-2' placeholder='Имя' {...field} />
                )}
            />
            <Controller
                control={control}
                name="lastName"
                render={({field}) => (
                    <Input className='col-span-2' placeholder='Фамилия' {...field} />
                )}
            />
            <Controller
                control={control}
                name="middleName"
                render={({field}) => (
                    <Input className='col-span-4' placeholder='Отчество' {...field} />
                )}
            />
            <Controller
                control={control}
                name="birthday"
                rules={{}}
                render={({field}) => (
                    <InputDate className='col-span-1' prefixImg='cake' placeholder='Дата рождения' {...field} />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({field}) => (
                    <Input className='col-span-1' prefix='@' placeholder='Email' {...field} />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({field}) => (
                    <Input className='col-span-1' prefixImg='geo' placeholder='Страна' {...field} />
                )}
            />
            <Controller
                control={control}
                name="city"
                render={({field}) => (
                    <Input className='col-span-1' prefixImg='geo' placeholder='Город' {...field} />
                )}
            />
            <Controller
                control={control}
                name="status"
                render={({field}) => (
                    <Input className='col-span-4' placeholder='Статус' {...field} />
                )}
            />
        </div>
    )
}
