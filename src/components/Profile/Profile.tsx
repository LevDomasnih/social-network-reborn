import React, {FC, FormEvent, useEffect, useMemo, useState} from "react";
import {ProfileProps} from "./Profile.props";
import {Avatar} from "../Avatar/Avatar";
import {Button} from "../Button/Button";
import {SvgImage} from "../SvgImage/SvgImage";
import {format} from "date-fns";
import {ProfileEdit} from "../ProfileEdit/ProfileEdit";
import {FormProvider, useForm} from "react-hook-form";
import {useAppDispatch} from "../../store/hooks";
import {editAvatar, editMainImage, editProfile} from "../../store/profile/profileThunks";
import {IProfile} from "../../models/IProfile";
import cn from "classnames";
import styles from './Profile.module.css'
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";

export const Profile: FC<ProfileProps> = ({profile, className, ...props}) => {
    const {avatar, mainImage, ...otherProfile} = profile
    const [isEdit, setIsEdit] = useState(false)
    const avatarInput = React.useRef<HTMLInputElement>(null);
    const mainImageInput = React.useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const methods = useForm({
        defaultValues: useMemo(() => profile, [profile])
    });

    const mainImageClick = () => {
        if (mainImageInput.current) {
            mainImageInput.current.click();
        }
    }

    const mainImageChange = (event: FormEvent<HTMLInputElement>) => {
        const fileUploaded: File = (event.target as HTMLInputElement).files![0];
        const formData = new FormData();
        formData.append("image", fileUploaded);
        dispatch(editMainImage(formData))
    }

    const avatarClick = () => {
        if (avatarInput.current) {
            avatarInput.current.click();
        }
    }


    const avatarChange = (event: FormEvent<HTMLInputElement>) => {
        const fileUploaded: File = (event.target as HTMLInputElement).files![0];
        const formData = new FormData();
        formData.append("image", fileUploaded);
        dispatch(editAvatar(formData))
    }

    useEffect(() => {
        methods.reset(profile);
    }, [methods, profile]);

    const onSubmit = ({avatar, mainImage, ...profile}: IProfile) => {
        dispatch(editProfile(profile))
    }

    return (
        <div className={className}>
            <BackgroundImage
                className={cn('h-[240px] rounded-b-[3px] overflow-hidden flex items-center justify-center relative', {
                    [styles.editedProfile]: isEdit
                })}
                src={mainImage} isEdit={isEdit}
                ref={mainImageInput} onChange={mainImageChange}
                onClick={() => isEdit && mainImageClick()}
            />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className='relative top-[-90px]'>
                        <div className='pl-[30px]'>
                            <div className='mb-[30px] flex items-end justify-between'>
                                <div className={cn('rounded-full h-[180px] w-[180px] bg-white flex items-center justify-center relative', {
                                    [styles.editedProfile]: isEdit
                                })} onClick={() => isEdit && avatarClick()}>
                                    <input type='file' ref={avatarInput} onChange={avatarChange} className='invisible absolute'/>
                                    <Avatar img={avatar || '/avatar.png'} width={175} height={175} />
                                    {isEdit && (
                                        <div className='h-[175px] w-[175px] bg-opacity-50 bg-black absolute rounded-full flex items-center justify-center '>
                                            <SvgImage svg='gallery' color='#FFF' className='h-[40px] w-[40px]' />
                                        </div>
                                    )}
                                </div>
                                <Button color={'light'} className='max-w-[115px]' type={isEdit ? 'button' : 'submit'}
                                        onClick={() => setIsEdit(prev => !prev)}>{isEdit ? 'Сохранить' : 'Изменить'}</Button>
                            </div>
                            <div className='pr-[30px]'>
                                {isEdit ? (
                                    <ProfileEdit profile={profile} setIsEdit={setIsEdit}/>
                                ) : (
                                    <>
                                        <div className='text-3xl text-[#161616] font-medium mb-[10px]'>
                                            {methods.getValues('firstName')} {methods.getValues('lastName')} {methods.getValues('middleName')}
                                        </div>
                                        <div
                                            className='text-base text-[#AEAEAE] font-medium mb-[20px]'>@{methods.getValues('email')}</div>
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
        </div>
    )
}
