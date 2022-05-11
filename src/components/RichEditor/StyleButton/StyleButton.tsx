import React, {FC, MouseEventHandler} from "react";
import cn from "classnames";
import {StyleButtonProps} from "./StyleButton.props";

export const StyleButton: FC<StyleButtonProps> = ({...props}) => {
    const onToggle: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    };

    return (
        <span className={cn('RichEditor-styleButton', {
            ['RichEditor-activeButton']: props.active
        })} onClick={onToggle}>
            {props.label}
        </span>
    )
}
