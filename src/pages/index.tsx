import type {NextPage} from 'next'
import {GetServerSidePropsContext} from "next";
import Head from 'next/head'
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import React from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks"
import Link from 'next/link'
import {Button, Checkbox, Form, Input} from '../components/antd';
import UserSvg from '../../public/svg/user.svg'
import PhoneSvg from '../../public/svg/phone.svg'
import EmailSvg from '../../public/svg/email.svg'
import LockSvg from '../../public/svg/lock.svg'
import {register} from "../store/auth/authThunks"
import {IRegister} from "../models/IRegister"
import routes from "../utils/routes";
import {defaultError} from "../store/auth/authSlice";
import {authAPI} from "../API/authAPI";

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

    const dispatch = useAppDispatch()
    const [form] = Form.useForm();
    const { loading } = useAppSelector(state => state.authSlice)

    //TODO пробрасывать чекаут
    const onFinish = ({ confirmPassword, remember, ...values }: IRegister & { confirmPassword: string, remember: boolean }) => {
        if (confirmPassword === values.password) {
            dispatch(register(values))
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
            <AuthLayout head={'Sign up'}>
                <Form
                    form={form}
                    name="SignUp"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="firstName"
                        rules={[{required: true, message: 'Please input your first name!'}]}
                    >
                        <Input
                            prefix={<UserSvg/>}
                            placeholder={'First name'}
                        />
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        rules={[{required: true, message: 'Please input your last name!'}]}
                    >
                        <Input
                            prefix={<UserSvg/>}
                            placeholder={'Last name'}
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{required: true, message: 'Please input your phone!'}]}
                    >
                        <Input
                            prefix={<PhoneSvg/>}
                            placeholder={'Phone'}
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!'
                            },
                            () => ({
                                async validator(_, value) {

                                    const isExistEmail = await authAPI.emailExist(value).then(e => e.data)

                                    if (isExistEmail) {
                                        return Promise.reject(new Error('Пользователь с таким email существует!'));
                                    }

                                    return Promise.resolve();
                                },
                            }),
                        ]}
                    >
                        <Input
                            // onChange={(e) => console.log(e.target.value)}
                            prefix={<EmailSvg/>}
                            placeholder={'Email'}
                        />
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                        hasFeedback
                    >
                        <Input.Password
                            prefix={<LockSvg/>}
                            placeholder={'Password'}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароль должен совпадать!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockSvg/>}
                            placeholder={'Confirm password'}
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName='checked'>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate>
                        {() => (
                            <Button
                                loading={loading}
                                type="primary"
                                style={{width: '100%'}}
                                htmlType="submit"
                                disabled={
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            >
                                SUGN UP
                            </Button>
                        )}
                    </Form.Item>
                </Form>

                <div>
                    Already have an account?
                    <Link href={'/login'}>
                        <a onClick={onLink}>Log in</a>
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}

export default Home
