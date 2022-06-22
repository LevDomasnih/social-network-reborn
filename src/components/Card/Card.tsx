import React, {FC} from "react";
import {CardProps} from "./Card.props";
import Image from "next/image";
import {SvgImage} from "../index";
import styled, {css} from "styled-components";

const Container = styled.div<{ photo?: string }>`
  overflow: hidden;
  position: relative;
  width: 140px;
  height: 175px;
  background: ${(props) => props.theme.colors.violet};
  border-radius: 3px;

  ${(props) => {
    if (!props.photo) {
      return css`
        &:hover {
          cursor: pointer;
        }
      `;
    }
  }}
`;

const ContainerEmpty = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  --transform-translate-x: -50%;
  --transform-translate-y: -50%;
  flex-direction: column;
  align-items: center;
`;

const Rounded = styled.div`
  position: relative;
  border-radius: 9999px;
  background: ${(props) => props.theme.colors.purple};
  width: 46px;
  height: 46px;
`;

const PlusSvg = styled(SvgImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  --transform-translate-x: -50%;
  --transform-translate-y: -50%;
`;

const Text = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 6px;
  color: ${(props) => props.theme.colors.dark};
`;

export const Card: FC<CardProps> = ({photo, ...props}) => {
    const handleClick = () => {

    }

    return (
        <Container photo={photo} onClick={handleClick}>
            {photo ? (
                <Image src={photo} width={140} height={175} objectFit='cover' objectPosition='center'/>
            ) : (
                <ContainerEmpty>
                    <Rounded>
                        <PlusSvg svg='plus' color='white'/>
                    </Rounded>
                    <Text>Добавить</Text>
                </ContainerEmpty>
            )}
        </Container>
    )
}
