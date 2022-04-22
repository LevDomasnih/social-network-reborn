import type {NextPage} from 'next'
import {GetServerSidePropsContext} from "next";
import Head from 'next/head'
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import React from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks"
import Link from 'next/link'
import UserSvg from '../../public/svg/user.svg'
import PhoneSvg from '../../public/svg/phone.svg'
import EmailSvg from '../../public/svg/email.svg'
import LockSvg from '../../public/svg/lock.svg'
import {register as registerThunk} from "../store/auth/authThunks"
import {IRegister} from "../models/IRegister"
import routes from "../utils/routes";
import {defaultError} from "../store/auth/authSlice";
import {authAPI} from "../API/authAPI";
import {Controller, useForm } from "react-hook-form";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {Checkbox} from "../components/Checkbox/Checkbox";


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    const token = ctx.req.cookies.jwt;

    if (!token) {
        return {
            props: {},
        };
    }

    return {
        redirect: {
            destination: routes.me,
            permanent: false
        }
    };
};


const Home: NextPage = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();

    const dispatch = useAppDispatch()

    const {loading} = useAppSelector(state => state.authSlice)

    const onFinish = ({ confirmPassword, ...values }: IRegister & { confirmPassword: string, remember: boolean }) => {
        if (confirmPassword === values.password) {
            dispatch(registerThunk(values))
        }
    };

    const onLink = () => {
        dispatch(defaultError())
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Sign up page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <AuthLayout head={'Регистрация'}>
                {/*@ts-ignore*/}
                <form onSubmit={handleSubmit(onFinish)} className='mt-[60px]'>
                    <div className='space-y-[35px]'>
                        <Input {...register("firstName", { required: 'Введите поле' })} error={errors.firstName} prefix={UserSvg} placeholder={'Имя'} />
                        <Input {...register("secondName", { required: 'Введите поле' })} error={errors.secondName} prefix={UserSvg} placeholder={'Фамилия'} />
                        <Input {...register("lastName", { required: 'Введите поле' })} error={errors.lastName} prefix={UserSvg} placeholder={'Отчество'} />
                        <Input {...register("phone", { required: 'Введите поле' })} error={errors.phone} prefix={PhoneSvg} placeholder={'Номер телефона'} type='number' />
                        <Input {
                            ...register("email", {
                                required: 'Введите поле',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Невалидный email адрес"
                                }
                            })}
                               error={errors.email}
                               prefix={EmailSvg}
                               placeholder={'Email'}
                               type='email'
                        />
                        <Input {...register("password", { minLength: { value: 8, message: 'Пароль должен иметь 8 и больше символов' }, required: 'Введите пароль' })} error={errors.password} prefix={LockSvg} placeholder={'Пароль'} type='password' />
                        <Controller
                            control={control}
                            name='confirmPassword'
                            rules={{
                                minLength: { value: 8, message: 'Пароль должен иметь 8 и больше символов' },
                                required: 'Введите пароль повторно',
                                validate: value => value === watch('password') || "Поля не совпадают"
                            }}
                            render={({fieldState}) => (<Input {...register("confirmPassword")} error={fieldState.error} prefix={LockSvg} placeholder={'Подтвердите пароль'} type='password' />)}
                        />

                    </div>
                    <div className='mt-[30px]'>
                        <Checkbox />
                    </div>
                    <Button type="submit" className='mt-[40px]'>Создать аккаунт</Button>
                </form>
                <div className='mt-[30px] text-lg text-[#161616] font-normal'>
                    Уже есть аккаунт?
                    <Link href={'/login'} >
                        <a onClick={onLink} className='pl-[8px] text-[#6962A8]'>Войти</a>
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}

export default Home
