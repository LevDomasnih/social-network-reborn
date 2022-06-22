import React, {FC} from "react";
import {BlogBottomProps} from "./BlogBottom.props";
import {SvgImage} from "../../SvgImage/SvgImage";
import styled from "styled-components";
import {HashTag} from "../../HashTag/HashTag";

const ContainerBottom = styled.div`
  > * {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContainerTags = styled.div`
  display: flex;

  > * {
    margin-right: 9px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ContainerActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionsLeft = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ActionsRight = styled.div``;

const Action = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const ActionText = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
`;

export const BlogBottom: FC<BlogBottomProps> = ({likes, views}) => {
    return (
        <>
            <ContainerBottom>
                <ContainerActions>
                    <ActionsLeft>
                        <Action>
                            <SvgImage svg='like' color='#161616'/>
                            <ActionText>{likes}</ActionText>
                        </Action>
                        <Action>
                            <SvgImage svg='comments' color='#161616'/>
                            <ActionText>{'comments'}</ActionText>
                        </Action>
                        <Action>
                            <SvgImage svg='reposts' color='#161616'/>
                            <ActionText>{'reposts'}</ActionText>
                        </Action>
                    </ActionsLeft>
                    <ActionsRight>
                        <Action>
                            <SvgImage svg='share' color='#161616'/>
                            <ActionText>Поделиться</ActionText>
                        </Action>
                    </ActionsRight>
                </ContainerActions>
                <ContainerTags>
                    <HashTag>#Наука</HashTag>
                    <HashTag>#Метаболизм</HashTag>
                </ContainerTags>
            </ContainerBottom>
        </>
    )
}
