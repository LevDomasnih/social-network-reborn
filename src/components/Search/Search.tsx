import {ForwardedRef, forwardRef} from "react";
import {SearchProps} from "./Search.props";
import {SvgImage} from "../SvgImage/SvgImage";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: stretch;
`;

const Input = styled.input`
  overflow: hidden;
  position: relative;
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  width: 100%;
  border-radius: 9999px;
  border-width: 2px;
  padding: 10px 0 10px 16px;
  color: ${(props) => props.theme.colors.dark};
  background: #FAFAFA;
`;

const SuffixWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 400;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.grey};
  bottom: 10px;
  padding-right: 16px;
`;

export const Search = forwardRef(({className, type, ...props}: SearchProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <Container className={className}>
            <Input
                {...props}
                ref={ref}
                placeholder={props.placeholder}
            />
            <SuffixWrapper>
                <SvgImage svg='search' color='#B7B7B7'/>
            </SuffixWrapper>
        </Container>
    )
})
