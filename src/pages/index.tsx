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

    //TODO пробрасывать чекаут
    const onFinish = ({ confirmPassword, ...values }: IRegister & { confirmPassword: string, remember: boolean }) => {
        if (confirmPassword === values.password) {
            dispatch(registerThunk(values))
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
                <form onSubmit={handleSubmit(onFinish)} className='mt-[60px]'>
                    <div className='space-y-[35px]'>
                        <Input {...register("firstName")} prefix={UserSvg} placeholder={'Имя'} />
                        <Input {...register("secondName")} prefix={UserSvg} placeholder={'Фамилия'} />
                        <Input {...register("lastName")} prefix={UserSvg} placeholder={'Отчество'} />
                        <Input {...register("phone")} prefix={PhoneSvg} placeholder={'Номер телефона'} type='number' />
                        <Input {...register("email")} prefix={EmailSvg} placeholder={'Email'} type='email' />
                        <Controller
                            control={control}
                            render={() => (
                                <Input {...register("password")} prefix={LockSvg} placeholder={'Пароль'} type='password' />
                            )}
                            name='password'
                            rules={{
                                minLength: 8,
                                required: '',
                            }}
                        />
                        <Controller
                            control={control}
                            name='confirmPassword'
                            rules={{
                                minLength: 8,
                                required: 'Please input your password confirmation.',
                                validate: value => value === watch('password') || "Passwords don't match."
                            }}
                            render={() => (
                                <Input {...register("confirmPassword")} prefix={LockSvg} placeholder={'Подтвердите пароль'} type='password' />
                            )}
                        />

                    </div>
                    <div className='mt-[30px]'>
                        <input
                            className="form-check-input appearance-none h-[12px] w-[12px] border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[7px] align-top bg-no-repeat bg-center bg-contain float-left mr-[10px] cursor-pointer"
                            type="checkbox" value="" id="flexCheckDefault" {...register("remember")} />
                        <label className="form-check-label inline-block font-normal text-[14px]" htmlFor="flexCheckDefault">
                            Запомнить меня
                        </label>
                    </div>
                    <Button type="submit" className='mt-[40px]'>Создать аккаунт</Button>
                </form>
                <div className='mt-[30px]'>
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
