import React, {FC} from "react";
import {StoriesProps} from "./Stories.props";
import {Htag} from "../index";
import {Story} from "../Story/Story";
import styled from "styled-components";

const Container = styled.div`
  > * {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StoriesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 66px;
`;

export const Stories: FC<StoriesProps> = ({className, ...props}) => {
    return (
        <Container className={className}>
            <Htag tag='h3'>Истории</Htag>
            <StoriesWrapper>
                <Story/>
                <Story avatar='/avatar.png' author='Лев'/>
                <Story avatar='/avatar.png' author='Лев'/>
                <Story avatar='/avatar.png' author='Лев'/>
                <Story avatar='/avatar.png' author='Лев' isVideo={true}/>
                <Story avatar='/avatar.png' author='Лев' isVideo={true}/>
                <Story avatar='/avatar.png' author='Лев' isVideo={true}/>
                <Story avatar='/avatar.png' author='Лев' isVideo={true}/>
            </StoriesWrapper>
        </Container>
    )
}
