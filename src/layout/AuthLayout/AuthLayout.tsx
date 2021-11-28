import React, {FC} from "react";
import {AuthLayoutProps} from "./AuthLayout.props";
import {Col, Row} from "antd";
import Htag from "../../components/Htag/Htag";
// @ts-ignore
import styles from './AuthLayout.module.less'

const AuthLayout: FC<AuthLayoutProps> = ({children, head, ...props}) => {
    return (
        <Row className={styles.authContainer}>
            <Col xs={20} sm={16} md={16} lg={16} xl={16} style={{backgroundColor: '#F3F3F3'}}/>
            <Col xs={2} sm={4} md={8} lg={8} xl={8}>
                <div className={styles.bodyForm}>
                    <Htag tag={'h1'} className={styles.head}>{head}</Htag>
                    {children}
                </div>
            </Col>
        </Row>
    )
}

export default AuthLayout