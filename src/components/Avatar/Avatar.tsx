import Image from "next/image";
import React, {FC} from "react";
import {AvatarProps} from "./Avatar.props";
import styled from 'styled-components'

interface ContainerInterface {
    width: number,
    height: number
}

const Container = styled.div<ContainerInterface>`
  overflow: hidden;
  border-radius: 9999px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Avatar: FC<AvatarProps> = ({img, width, height, objectFit, classname, ...props}) => (
    <Container data-testid={'avatarContainer'} {...props} className={classname} width={width} height={height}>
        <Image src={img} width={width} height={height} objectFit={objectFit || 'cover'}/>
    </Container>
)
