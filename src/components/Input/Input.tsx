import React, {ForwardedRef, forwardRef, useEffect, useState} from "react";
import {InputProps} from "./Input.props";
import {SvgImage} from "../index";
import styled, {css} from "styled-components";

const Container = styled.div`
  position: relative;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

const PrefixWrapper = styled.span`
  position: absolute;
  background-color: transparent;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  top: 50%;
  transform: translate(0, -50%);
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.grey};
  z-index: 10;
`;

const PrePostfix = styled(SvgImage)`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const Prefix = styled.span<{ active: boolean }>`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(props) => props.active ? props.theme.colors.dark : props.theme.colors.grey};
`;

const Error = styled.div`
  position: absolute;
  margin-top: 0.25rem;
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  color: #d74d4d;
`;

const InputStyled = styled.input<{ error: boolean, active: boolean, notPrefix: boolean }>`
  position: relative;
  padding: 10px 12px 10px 24px;
  background-color: #ffffff;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  width: 100%;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};

  &::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.dark};
    outline: none;
    box-shadow: none;
  }

  ${(props) => {
    if (props.error) {
      return css`
        border-bottom: 1px solid #d74d4d;
      `;
    }
    if (props.active) {
      return css`
        border-bottom-color: ${(props) => props.theme.colors.dark};
      `;
    }
    if (props.notPrefix) {
      return css`
        padding-left: 0;
      `;
    }
  }}
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  z-index: 10;
  background-color: transparent;
  font-weight: 400;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.grey};
  bottom: 10px;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
`;

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        className,
        style,
        error,
        fontSize,
        weight,
        type,
        prefixImg,
        prefix,
        inputStyle,
        onChange,
        placeholder,
        value,
        ...otherProps
    } = props
    const [showPassword, setShowPassword] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [inputType, setInputType] = useState('text')
    const [isFilled, setIsFilled] = useState(false)

    useEffect(() => {
        if (value) {
            setIsFilled(true)
        } else {
            setIsFilled(false)
        }
    }, [ref, value])

    useEffect(() => {
        if (type === 'password') {
            if (showPassword) {
                setInputType('text')
            } else {
                setInputType('password')
            }
        }
    }, [showPassword, type])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | null) => {
        if (onChange && event) {
            onChange(event)
        }
    }

    return (
        <Container className={className} style={style}>
            <InputWrapper>
                {(prefixImg || prefix) && (
                    <PrefixWrapper>
                        {prefixImg && <PrePostfix svg={prefixImg} color={isFocus || isFilled ? '#161616' : '#B7B7B7'}/>}
                        {prefix && <Prefix active={isFocus || isFilled}>{prefix}</Prefix>}
                    </PrefixWrapper>
                )}
                <InputStyled
                    // @ts-ignore
                    ref={ref}
                    {...otherProps}
                    value={value || ''}
                    onChange={handleChange}
                    type={inputType}
                    placeholder={placeholder}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    style={inputStyle}
                    error={!!error}
                    active={isFocus || isFilled}
                    notPrefix={!prefix && !prefixImg}
                />
                {type === 'password' && (
                    <Button type='button' onClick={() => setShowPassword(prev => !prev)}>
                        <PrePostfix svg='showPass' color={isFocus || isFilled ? '#161616' : '#B7B7B7'}/>
                    </Button>
                )}
            </InputWrapper>
            {error && <Error>{error.message}</Error>}
        </Container>
    )
})
