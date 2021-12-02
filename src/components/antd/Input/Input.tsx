import {Component, FC} from "react";
import {Input as AntInput} from "antd";
import {InputProps, InputState} from "antd/lib/input/Input";
import {PasswordProps} from "antd/lib/input/Password";
import {GroupProps, SearchProps, TextAreaProps} from "antd/lib/input";
// @ts-ignore TODO поправить импорты
import styles from './Input.module.less'
import cn from "classnames"


export class Input extends Component<InputProps, InputState> {
    static Group: FC<GroupProps> = (props) => (
        <AntInput.Group className={cn(styles.inputCustom, props.className)} {...props} />
    )

    static Search: FC<SearchProps> = (props) => (
        <AntInput.Search className={cn(styles.inputCustom, props.className)} {...props} />
    )

    static TextArea: FC<TextAreaProps> = (props) => (
        <AntInput.TextArea className={cn(styles.inputCustom, props.className)} {...props} />
    )

    static Password: FC<PasswordProps> = (props) => (
        <AntInput.Password className={cn(styles.inputCustom, props.className)} {...props} />
    )

    render() {
        return <AntInput {...this.props} className={cn(styles.inputCustom, this.props.className)} />
    }
}

export default Input