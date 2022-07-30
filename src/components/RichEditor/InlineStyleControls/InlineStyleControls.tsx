import React, {FC} from "react";
import {StyleButton} from "../StyleButton/StyleButton";
import {InlineStyleControlsProps} from "./InlineStyleControls.props";
import styled from "styled-components";

const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
];

const Container = styled.div`
  margin-bottom: 5px;
  user-select: none;
`;

export const InlineStyleControls: FC<InlineStyleControlsProps> = ({className, editorState, onToggle, ...props}) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <Container
            className={className}
        >
            {INLINE_STYLES.map(type =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            )}
        </Container>
    );
};
