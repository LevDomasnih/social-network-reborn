import Head from "next/head";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Link from "next/link";
import React from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks"
import {ILogin} from "../models/ILogin";
import {login} from "../store/modules/auth/authThunks";
import {GetServerSidePropsContext, NextPage} from "next";
import routes from "../utils/routes";
import {defaultError} from "../store/modules/auth/authSlice";
import {Controller, useForm} from "react-hook-form";
import {Button, Checkbox, Input} from "../components";
import styled from "styled-components";
import {ILoginPage} from "../models/pages/ILoginPage";

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

const SignInButton = styled(Button)`
  margin-top: 40px;
`;

const AccountNotExists = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 400;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.dark};
`;

const SignUp = styled.a`
  padding-left: 8px;
  color: ${(props) => props.theme.colors.purple};
`;

const LoginPage: NextPage<ILoginPage> = (props) => {
    const {register, handleSubmit, getValues, watch, formState: {errors}, control} = useForm();

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
                <Form onSubmit={handleSubmit(onFinish)}>
                    <Fields>
                        <Controller
                            control={control}
                            name="loginOrEmail"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='email' type='email'
                                       placeholder={'Логин или email'} {...field} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'Введите поле'
                            }}
                            render={({field, fieldState: {error}}) => (
                                <Input error={error} prefixImg='lock' placeholder={'Пароль'} {...field} />
                            )}
                        />
                    </Fields>
                    <CheckboxWrapper>
                        <Checkbox forgivePassword={true}/>
                    </CheckboxWrapper>
                    <SignInButton type="submit">Войти в аккаунт</SignInButton>
                </Form>
                <AccountNotExists>
                    У вас нет аккаунта?
                    <Link href={'/'}>
                        <SignUp onClick={onLink}>Зарегистрироваться</SignUp>
                    </Link>
                </AccountNotExists>
            </AuthLayout>
        </div>

    )
}

export default LoginPage
