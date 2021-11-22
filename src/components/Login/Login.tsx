import {Button, Card, Checkbox, Form, Input} from "antd";
import React, {FC} from "react";
import {LoginProps} from "./Login.props";
import styles from './Login.module.css'
import {useAppDispatch} from "../../store/hooks";
import {login} from "../../store/auth/authThunks";
import {IAuth} from "../../models/IAuth";

const Login: FC<LoginProps> = () => {

    const dispatch = useAppDispatch()

    const onFinish = (values: IAuth) => {
        console.log('Success:', values);
        dispatch(login(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Card bordered={false} className={styles.card}>
            <Form
                name="basic"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Login"
                    name="login"
                    rules={[{required: true, message: 'Please input your login!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>*/}
                {/*    <Checkbox>Remember me</Checkbox>*/}
                {/*</Form.Item>*/}

                <Form.Item wrapperCol={{offset: 4, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login