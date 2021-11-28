import Head from "next/head";
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import {Button, Checkbox, Form} from "antd";
import Input from "../components/Input/Input";
import Link from "next/link";
import React from "react";
import {useAppDispatch} from "../store/hooks";
import {IAuth} from "../models/IAuth";
import {login} from "../store/auth/authThunks";

const Login = () => {

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
                <link rel="icon" href='/src/public/favicon.ico'/>
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
                        <Input prefix={<svg xmlns="http://www.w3.org/2000/svg" fill="#292929" width="14" height="14"
                                            viewBox="0 0 14 14">
                            <path id="Контур_63756" data-name="Контур 63756"
                                  d="M149.448,125.425a6.571,6.571,0,0,0-1.5-2.1,7.029,7.029,0,0,0-2.225-1.418l-.022-.009a4.283,4.283,0,0,0,1.914-3.535,4.624,4.624,0,0,0-9.234,0,4.289,4.289,0,0,0,1.914,3.537l-.022.009a6.969,6.969,0,0,0-2.225,1.418,6.6,6.6,0,0,0-1.5,2.1,6.231,6.231,0,0,0-.549,2.429.137.137,0,0,0,.042.1.153.153,0,0,0,.107.042h1.117a.145.145,0,0,0,.149-.137,5.108,5.108,0,0,1,1.635-3.593,5.82,5.82,0,0,1,7.9,0,5.108,5.108,0,0,1,1.635,3.593.144.144,0,0,0,.149.137h1.117a.153.153,0,0,0,.107-.042.137.137,0,0,0,.042-.1A6.247,6.247,0,0,0,149.448,125.425ZM143,121.387a3.278,3.278,0,0,1-2.264-.886,2.907,2.907,0,0,1,0-4.277,3.334,3.334,0,0,1,4.528,0,2.907,2.907,0,0,1,0,4.277A3.278,3.278,0,0,1,143,121.387Z"
                                  transform="translate(-135.997 -114)"/>
                        </svg>
                        } placeholder={'Email'}/>
                    </Form.Item>


                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password
                            prefix={<svg xmlns="http://www.w3.org/2000/svg" fill="#292929" width="14" height="14"
                                         viewBox="0 0 14 14">
                                <path id="Контур_63756" data-name="Контур 63756"
                                      d="M149.448,125.425a6.571,6.571,0,0,0-1.5-2.1,7.029,7.029,0,0,0-2.225-1.418l-.022-.009a4.283,4.283,0,0,0,1.914-3.535,4.624,4.624,0,0,0-9.234,0,4.289,4.289,0,0,0,1.914,3.537l-.022.009a6.969,6.969,0,0,0-2.225,1.418,6.6,6.6,0,0,0-1.5,2.1,6.231,6.231,0,0,0-.549,2.429.137.137,0,0,0,.042.1.153.153,0,0,0,.107.042h1.117a.145.145,0,0,0,.149-.137,5.108,5.108,0,0,1,1.635-3.593,5.82,5.82,0,0,1,7.9,0,5.108,5.108,0,0,1,1.635,3.593.144.144,0,0,0,.149.137h1.117a.153.153,0,0,0,.107-.042.137.137,0,0,0,.042-.1A6.247,6.247,0,0,0,149.448,125.425ZM143,121.387a3.278,3.278,0,0,1-2.264-.886,2.907,2.907,0,0,1,0-4.277,3.334,3.334,0,0,1,4.528,0,2.907,2.907,0,0,1,0,4.277A3.278,3.278,0,0,1,143,121.387Z"
                                      transform="translate(-135.997 -114)"/>
                            </svg>} placeholder={'Password'}/>
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