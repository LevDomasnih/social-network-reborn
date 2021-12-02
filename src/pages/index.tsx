import type {NextPage} from 'next'
import Head from 'next/head'
import 'antd/dist/antd.css';
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import React from 'react';
import {useAppDispatch} from "../store/hooks";
import {IAuth} from "../models/IAuth";
import {login} from "../store/auth/authThunks";
import Link from 'next/link'
import { Button, Form, Checkbox, Input } from '../components/antd';
import UserSvg from '../../public/svg/user.svg'
import PhoneSvg from '../../public/svg/phone.svg'
import EmailSvg from '../../public/svg/email.svg'
import LockSvg from '../../public/svg/lock.svg'


const Home: NextPage = () => {

    const dispatch = useAppDispatch()

    const onFinish = (values: IAuth) => {
        dispatch(login(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Sign up page"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <AuthLayout head={'Sign up'}>
                <Form
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
                        <Input prefix={<UserSvg />} placeholder={'First name'}/>
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        rules={[{required: true, message: 'Please input your last name!'}]}
                    >
                        <Input prefix={<UserSvg />
                        } placeholder={'Last name'}/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[{required: true, message: 'Please input your phone!'}]}
                    >
                        <Input prefix={<PhoneSvg />
                        } placeholder={'Phone'}/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}
                    >
                        <Input prefix={<EmailSvg />
                        } placeholder={'Email'}/>
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            prefix={<LockSvg />} placeholder={'Password'}/>
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            prefix={<LockSvg />} placeholder={'Confirm password'}/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName='checked'>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" style={{width: '100%'}} htmlType="submit">
                            SUGN UP
                        </Button>
                    </Form.Item>
                </Form>

                <div>
                    Already have an account?
                    <Link href={'/login'}>
                        <a>Log in</a>
                    </Link>
                </div>
            </AuthLayout>
        </div>
    )
}

export default Home
