import React, {ForwardedRef, forwardRef} from "react";
import {CheckboxProps} from "./Checkbox.props";
import Link from "next/link";
import {defaultError} from "../../store/auth/authSlice";
import {useAppDispatch} from "../../store/hooks";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  float: left;
  background-color: ${(props) => props.theme.colors.white};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 200ms;
  vertical-align: top;
  border-radius: 0.125rem;
  border-width: 1px;
  appearance: none;
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin-top: 7px;
  margin-right: 10px;
`;

const Label = styled.label`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 400;
`;

const LinkText = styled.a`
  padding-left: 8px;
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
`;

export const Checkbox = forwardRef(({forgivePassword, ...props}: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    const dispatch = useAppDispatch()

    const onLink = () => {
        dispatch(defaultError())
    }

    return (
        <Container>
            <div>
                <Input
                    ref={ref}
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <Label htmlFor="flexCheckDefault">
                    Запомнить меня
                </Label>
            </div>
            {forgivePassword && (
                <div>
                    <Link href={'/forgivePassword'}>
                        <LinkText onClick={onLink}>
                            Забыли пароль?
                        </LinkText>
                    </Link>
                </div>
            )}
        </Container>
    )
})
