import Head from "next/head";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import Link from "next/link";
import React from "react";
import {useAppDispatch} from "../store/hooks";
import {ILogin} from "../models/ILogin";
import {login} from "../store/auth/authThunks";
import { Button, Form, Checkbox, Input } from '../components/antd';
import UserSvg from '../../public/svg/user.svg'
import LockSvg from '../../public/svg/lock.svg'

const Login = () => {

    const dispatch = useAppDispatch()

    const onFinish = ({ remember, ...values }: ILogin & {remember: boolean}) => {
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
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <AuthLayout head={'Login'}>
                <Form
                    name="Login"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >



                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Please input your email!'}]}
                    >
                        <Input prefix={<UserSvg />
                        } placeholder={'Email'}/>
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            prefix={<LockSvg />} placeholder={'Password'}/>
                    </Form.Item>


                    <Form.Item name="remember" valuePropName='checked'>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" style={{width: '100%'}} htmlType="submit">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>

                <div>
                    Already have an account?
                    <Link href={'/'}>
                        <a>Sign Up</a>
                    </Link>
                </div>
            </AuthLayout>
        </div>

    )
}

export default Login
