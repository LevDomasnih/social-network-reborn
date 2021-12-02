import AntCheckbox, {
    CheckboxProps as AntCheckboxProps,
} from 'antd/lib/checkbox/index';
import React from 'react';
// @ts-ignore
import styles from './Checkbox.module.less'
import cn from "classnames"

const Checkbox = ({ ...props }: AntCheckboxProps) => {
    return <AntCheckbox {...props} className={cn(styles.checkboxCustom, props.className)} />;
};

export default Checkbox;