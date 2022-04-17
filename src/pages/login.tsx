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
    const onSubmit = data => console.log(data);

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
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <AuthLayout head={'Вход'}>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-[60px]'>
                    <div className='space-y-[35px]'>
                        <Input defaultValue="lastName" {...register("example")} prefix={UserSvg} placeholder={'Логин или email'} />
                        <Input defaultValue="lastName" {...register("example")} prefix={LockSvg} placeholder={'Пароль'} type="password" />
                    </div>
                    <div className='mt-[30px]'>
                        <input
                            className="form-check-input appearance-none h-[12px] w-[12px] border rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-[7px] align-top bg-no-repeat bg-center bg-contain float-left mr-[10px] cursor-pointer"
                            type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label inline-block font-normal text-[14px]" htmlFor="flexCheckDefault">
                            Запомнить меня
                        </label>
                    </div>
                    <Button type="submit" className='mt-[40px]'>Создать аккаунт</Button>
                </form>
                <div className='mt-[30px]'>
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
