import type {NextPage} from 'next'
import {GetServerSidePropsContext} from "next";
import Head from 'next/head'
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import React from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks"
import Link from 'next/link'
import {register as registerThunk} from "../store/auth/authThunks"
import {IRegister} from "../models/IRegister"
import routes from "../utils/routes";
import {defaultError} from "../store/auth/authSlice";
import {Controller, useForm} from "react-hook-form";
import {Button, Checkbox, Input} from "../components";
import axios, {AxiosResponse} from "axios";
import {IToken} from "../models/IToken";
import {ILogin} from "../models/ILogin";
import Cookies from "cookies";
import styled from "styled-components";
import {IRegisterPage} from "../models/pages/IRegisterPage";


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    let cookiesToken = ctx.req.cookies.jwt;

    // DEV AUTH
    if (process.env.AUTH_DONE === 'true' && process.env.AUTH_LOGIN && process.env.AUTH_PASSWORD && !cookiesToken) {
        const cookies = new Cookies(ctx.req, ctx.res);
        let token = await axios
            .post<IToken, AxiosResponse<IToken>, ILogin>(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                loginOrEmail: process.env.AUTH_LOGIN,
                password: process.env.AUTH_PASSWORD,
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.data.access_token
                }
                return null
            })
            .catch((err) => null);

        if (!token) {
            const dataToBeSent: IRegister = {
                email: 'tested@tested.com',
                password: 'tested_password',
                firstName: 'test',
                lastName: 'tester',
                phone: '+7 950 453 10 12',
            }

            token = await axios
                .post<IToken, AxiosResponse<IToken>, IRegister>(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, dataToBeSent)
                .then((response) => {
                    if (response.status === 200) {
                        return response.data.access_token
                    }
                    return null
                })
                .catch((err) => null);
        }

        if (token) {
            cookies.set('jwt', token, {
                httpOnly: true,
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                sameSite: 'lax',
            });
            cookiesToken = token
        }
    }

    if (!cookiesToken) {
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

const Form = styled.form`
  margin-top: 60px;
`;

const Fields = styled.div`
  > * {
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CheckboxWrapper = styled.div`
  margin-top: 30px;
`;

const CreateAccountButton = styled(Button)`
  margin-top: 40px;
`;

const AccountExists = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 400;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.dark};
`;

const SignIn = styled.a`
  padding-left: 8px;
  color: ${(props) => props.theme.colors.purple};
`;

const Home: NextPage<IRegisterPage> = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: {errors, dirtyFields, touchedFields},
        control,
    } = useForm();
    const dispatch = useAppDispatch()

    const {loading} = useAppSelector(state => state.authSlice)

    const onFinish = ({confirmPassword, ...values}: IRegister & { confirmPassword: string, remember: boolean }) => {
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
                <Form onSubmit={handleSubmit(onFinish)}>
                    <Fields>
                        <Controller
                            control={control}
                            name="firstName"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='user' placeholder={'Имя'} {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="secondName"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='user' placeholder={'Фамилия'} {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='user' placeholder={'Отчество'}  {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="phone"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='phone' placeholder={'Номер телефона'}
                                       type='number' {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: 'Введите поле',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Невалидный email адрес"
                                }
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='email' placeholder={'Email'} type='email' {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                minLength: {
                                    value: 8,
                                    message: 'Пароль должен иметь 8 и больше символов'
                                },
                                required: 'Введите пароль'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='lock' placeholder={'Пароль'}
                                       type='password' {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name='confirmPassword'
                            rules={{
                                minLength: {value: 8, message: 'Пароль должен иметь 8 и больше символов'},
                                required: 'Введите пароль повторно',
                                validate: value => value === watch('password') || "Поля не совпадают"
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='lock' placeholder={'Подтвердите пароль'}
                                       type='password' {...field} />)}
                        />

                    </Fields>
                    <CheckboxWrapper>
                        <Checkbox/>
                    </CheckboxWrapper>
                    <CreateAccountButton type="submit">Создать аккаунт</CreateAccountButton>
                </Form>
                <AccountExists>
                    Уже есть аккаунт?
                    <Link href={'/login'}>
                        <SignIn onClick={onLink}>Войти</SignIn>
                    </Link>
                </AccountExists>
            </AuthLayout>
        </div>
    )
}

export default Home
