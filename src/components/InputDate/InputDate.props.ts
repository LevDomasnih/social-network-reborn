import {InputProps} from "../Input/Input.props";

export interface InputDateProps extends InputProps {
    onChange: (...event: any[]) => void
}
