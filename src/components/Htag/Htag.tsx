import {FC} from "react";
import {HtagProps} from "./Htag.props";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight["4xl"]};
`;

const H2 = styled.h2`
  font-size: ${(props) => props.theme.fontSize["4xl"]};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight["4xl"]};
`;

const H3 = styled.h3`
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: 500;
  line-height: ${(props) => props.theme.lineHeight["xl"]};
`;

export const Htag: FC<HtagProps> = ({tag, children, className}): JSX.Element => {
    switch (tag) {
        case "h1":
            return <H1>{children}</H1>
        case "h2":
            return <H2>{children}</H2>
        case "h3":
            return <H3>{children}</H3>
        default:
            return <></>
    }
}
