import {FC} from "react";
import {AuthLayoutProps} from "../MainLayout/AuthLayout.props";
import styles from './AuthLayout.module.css'

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className={styles.authContainer}>
            {children}
        </div>
    )
}

export default AuthLayout