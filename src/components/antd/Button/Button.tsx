import AntButton, {
    ButtonProps as AntButtonProps,
} from 'antd/lib/button/index';
import React from 'react';
// @ts-ignore
import styles from './Button.module.less'
import cn from "classnames"

const Button = ({ ...props }: AntButtonProps) => {
    return <AntButton {...props} className={cn(styles.buttonCustom, props.className)} />;
};

export default Button;