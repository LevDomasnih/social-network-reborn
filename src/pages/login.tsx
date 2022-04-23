import Head from "next/head";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Link from "next/link";
import React from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks"
import {ILogin} from "../models/ILogin";
import {login} from "../store/auth/authThunks";
import UserSvg from '../../public/svg/user.svg'
import LockSvg from '../../public/svg/lock.svg'
import {GetServerSidePropsContext} from "next";
import routes from "../utils/routes";
import {defaultError} from "../store/auth/authSlice";
import {Input} from "../components/Input/Input";
import {Button} from "../components/Button/Button";
import {useForm} from "react-hook-form";
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

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const dispatch = useAppDispatch()

    const {loading} = useAppSelector(state => state.authSlice)

    const onFinish = ({remember, ...values}: ILogin & { remember: boolean }) => {
        dispatch(login(values))
    };

    const onLink = () => {
        dispatch(defaultError())
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Sign up page"/>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <AuthLayout head={'Вход'}>
                {/*@ts-ignore*/}
                <form onSubmit={handleSubmit(onFinish)} className='mt-[60px]'>
                    <div className='space-y-[35px]'>
                        <Input {...register("loginOrEmail", { required: 'Введите поле' })} error={errors.loginOrEmail} prefixImg='email' type='email' placeholder={'Логин или email'} value={watch('loginOrEmail')} />
                        <Input {...register("password", { required: 'Введите поле' })} error={errors.password} prefixImg='lock' placeholder={'Пароль'} type="password" value={watch('password')} />
                    </div>
                    <div className='mt-[30px]'>
                        <Checkbox forgivePassword={true} />
                    </div>
                    <Button type="submit" className='mt-[40px]'>Войти в аккаунт</Button>
                </form>
                <div className='mt-[30px] text-lg text-[#161616] font-normal'>
                    У вас нет аккаунта?
                    <Link href={'/'}>
                        <a onClick={onLink} className='pl-[8px] text-[#6962A8]'>Зарегистрироваться</a>
                    </Link>
                </div>
            </AuthLayout>
        </div>

    )
}

export default Login
