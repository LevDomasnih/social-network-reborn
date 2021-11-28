import {Component, FC} from "react";
import {Input as AntInput} from "antd";
import {InputProps, InputState} from "antd/lib/input/Input";
import {PasswordProps} from "antd/lib/input/Password";
import {GroupProps, SearchProps, TextAreaProps} from "antd/lib/input";
// @ts-ignore TODO поправить импорты
import styles from './Input.module.less'


export class Input extends Component<InputProps, InputState> {
    static Group: FC<GroupProps> = (props) => (
        <AntInput.Group className={styles.inputCustom} {...props} />
    )

    static Search: FC<SearchProps> = (props) => (
        <AntInput.Search className={styles.inputCustom} {...props} />
    )

    static TextArea: FC<TextAreaProps> = (props) => (
        <AntInput.TextArea className={styles.inputCustom} {...props} />
    )

    static Password: FC<PasswordProps> = (props) => (
        <AntInput.Password className={styles.inputCustom} {...props} />
    )

    render() {
        return <AntInput {...this.props} className={styles.inputCustom} />
    }
}

export default Input