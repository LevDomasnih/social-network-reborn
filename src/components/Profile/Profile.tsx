import React, {FC, useEffect, useMemo, useState} from "react";
import {ProfileProps} from "./Profile.props";
import Image from "next/image";
import {Avatar} from "../Avatar/Avatar";
import {Button} from "../Button/Button";
import {SvgImage} from "../SvgImage/SvgImage";
import {format} from "date-fns";
import {ProfileEdit} from "../ProfileEdit/ProfileEdit";
import {FormProvider, useForm} from "react-hook-form";

export const Profile: FC<ProfileProps> = ({profile, className, ...props}) => {
    const [isEdit, setIsEdit] = useState(false)
    const methods = useForm({
        defaultValues: useMemo(() => profile, [profile])
    });

    useEffect(() => {
        methods.reset(profile);
    }, [methods, profile]);

    const onSubmit = (p) => {
        console.log(p)
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
                <div className='h-[240px] rounded-b-[3px] overflow-hidden'
                     onClick={() => isEdit && methods.setValue("mainImage", "newMainImage")}>
                    <Image src={'/meBg.png'} height={240} width={920} objectFit='cover' objectPosition='center'/>
                </div>
                <div className='relative top-[-90px]'>
                    <div className='pl-[30px]'>
                        <div className='mb-[30px] flex items-end justify-between'>
                            <div
                                className='rounded-full h-[180px] w-[180px] bg-white flex items-center justify-center'>
                                <Avatar img={methods.getValues('avatar') || '/avatar.png'} width={175} height={175}
                                        onClick={() => isEdit && methods.setValue("avatar", "newAvatar")}/>
                            </div>
                            <Button theme={'light'} className='max-w-[115px]' type={isEdit ? 'button' : 'submit'}
                                    onClick={() => setIsEdit(prev => !prev)}>{isEdit ? 'Сохранить' : 'Изменить'}</Button>
                        </div>
                        <div className='pr-[30px]'>
                            {isEdit ? (
                                <ProfileEdit profile={profile} setIsEdit={setIsEdit}/>
                            ) : (
                                <>
                                    <div
                                        className='text-3xl text-[#161616] font-medium mb-[10px]'>{methods.getValues('firstName')} {methods.getValues('lastName')}</div>
                                    <div
                                        className='text-base text-[#AEAEAE] font-medium mb-[20px]'>@{methods.getValues('login')}</div>
                                    <div
                                        className='text-base text-[#161616] font-normal mb-[15px] flex items-center'>
                                        {methods.getValues('birthday') && (
                                            <>
                                                <SvgImage svg='cake' color='#161616'/>
                                                <span
                                                    className='ml-[8px] mr-[20px]'>{format(new Date(methods.getValues('birthday') as unknown as string), 'dd.MM.yyyy')}</span>
                                            </>
                                        )}
                                        <SvgImage svg='geo' color='#161616'/>
                                        <span
                                            className='ml-[8px]'>{methods.getValues('country')}, {methods.getValues('city')}</span>
                                    </div>
                                    {methods.getValues('status') && <div
                                        className='text-base font-normal text-[#161616]'>{methods.getValues('status')}</div>}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
