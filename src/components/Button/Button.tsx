import {ButtonProps} from "./Button.props";
import styled, {css} from "styled-components";

export const Button = styled.button<ButtonProps>`
  transition-duration: 300ms;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  width: 100%;
  height: 38px;
  border-radius: 38px;
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
