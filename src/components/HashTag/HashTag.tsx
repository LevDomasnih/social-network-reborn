import {FC} from "react";
import {HashTagProps} from "./HashTag.props";
import styled from "styled-components";

const Container = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;
  padding: 7px 15px;
  background: ${(props) => props.theme.colors.whiteGrey};
  width: fit-content;
  overflow: hidden;
  border-radius: 9999px;
`;

export const HashTag: FC<HashTagProps> = ({children, className, ...props}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
