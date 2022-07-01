import React, {FC, MouseEventHandler} from "react";
import {StyleButtonProps} from "./StyleButton.props";
import styled from "styled-components";

const Container = styled.span<{ active: boolean }>`
  color: ${(props) => props.active ? '#5890ff' : '#999'};
  cursor: pointer;
  margin-right: 16px;
  padding: 2px 0;
  display: inline-block;
`;

export const StyleButton: FC<StyleButtonProps> = ({className, ...props}) => {
    const onToggle: MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    };

    return (
        <Container
            className={className}
            active={props.active}
            onClick={onToggle}
        >
            {props.label}
        </Container>
    )
}
