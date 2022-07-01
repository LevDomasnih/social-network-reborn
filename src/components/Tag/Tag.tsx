import {FC} from "react";
import {TagProps} from "./Tag.props";
import styled, {css} from "styled-components";

const Container = styled.button<{ active?: boolean }>`
  background-color: ${(props) => props.theme.colors.white};
  transition-duration: 300ms;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  white-space: nowrap;
  width: min-content;
  height: 38px;
  color: ${(props) => props.theme.colors.dark};
  padding: 0 25px;
  border-radius: 20px;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
    color: ${(props) => props.theme.colors.white};
  }

  ${(props) => {
    if (props.active) {
      return css`
        background: #6962A8;
        color: #FFFFFF;
        box-shadow: none;

        &:hover {
          background: #FFFFFF;
          color: #161616;
          box-shadow: 0 2px 6px rgba(22, 22, 22, 0.11);
        }
      `;
    }
    if (!props.active) {
      return css`
        box-shadow: 0px 2px 6px rgba(22, 22, 22, 0.11);
      `;
    }
  }}
`;

export const Tag: FC<TagProps> = ({children, active, ...props}) => {
    return (
        <Container active={active}>
            {children}
        </Container>
    )
}
