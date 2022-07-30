import {ButtonProps} from "./Button.props";
import styled, {css} from "styled-components";
import React, {FC} from "react";

const Container = styled.button<ButtonProps>`
  transition-duration: 300ms;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  width: 100%;
  height: 38px;
  border-radius: 38px;
  cursor: pointer;
  ${(props) => {
    switch (props.color) {
      case "light":
        return css`
          background: ${(props) => props.theme.colors.white};
          color: ${(props) => props.theme.colors.dark};
          border: 1px solid ${(props) => props.theme.colors.purple};

          &:hover {
            background: ${(props) => props.theme.colors.purple};
            color: ${(props) => props.theme.colors.white};
          }
        `;
      default:
        return css`
          background: ${(props) => props.theme.colors.purple};
          color: ${(props) => props.theme.colors.white};
          border: 1px solid ${(props) => props.theme.colors.purple};

          &:hover {
            background: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.dark};
          }
        `;
    }
  }}
`;

export const Button: FC<ButtonProps> = ({children, onClick, ...props}) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick(e)
    }
  }

  return (
      <Container
          {...props}
          onClick={handleClick}
      >
        {children}
      </Container>
  )
}
