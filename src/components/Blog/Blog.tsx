import React, { FC, useState } from "react"
import {BlogProps} from "./Blog.props";
import { Avatar, SvgImage, HashTag, Htag, RichEditor, BackgroundImage } from "../index"
import {format} from "date-fns";
import { convertFromRaw, EditorState, RawDraftContentBlock } from "draft-js"
import styled from "styled-components"
import { theme } from "../../shared/theme"

const Container = styled.div`
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #E4E4E4;
`;

const ContainerItem = styled.div`
  padding: 20px;
`;

const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  > * {
    margin-right: 7px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const InfoText = styled.div<{color?: string}>`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  color: ${(props) => props.color || props.theme.colors.dark};
`;

const Background = styled(props => <BackgroundImage {...props} />)`
  width: 100%;
  height: 270px;
  position: relative;
`;

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

export const Blog: FC<BlogProps> = ({textBlocks, createdAt, mainImage, likes, profile: { firstName, lastName, middleName, avatar }, ...props}) => {
    const editor = EditorState.createWithContent(convertFromRaw({
        blocks: textBlocks as RawDraftContentBlock[],
        entityMap: props.entityMap
    }))
    return (
        <Container>
            <ContainerItem>
                <ContainerInfo>
                    <Info>
                        <InfoItem>
                            {/*TODO должна быть пнг или загружаемая свг*/}
                            {/*<SvgImage svg={icon as svgNames} color='#4EB000'/>*/}
                            <InfoText color='#4EB000'>
                                {'theme'}
                            </InfoText>
                        </InfoItem>
                        <InfoItem>
                            {avatar && <Avatar img={avatar} width={22} height={22}/>}
                            <InfoText>
                                {`${firstName} ${lastName}`}
                            </InfoText>
                        </InfoItem>
                        <InfoText color={theme.colors.grey}>
                            {format(new Date(createdAt), 'HH:mm').toString()}
                        </InfoText>
                    </Info>
                    <SvgImage svg='save' color='#161616'/>
                </ContainerInfo>
                <RichEditor editorState={editor} readonly={true}/>
            </ContainerItem>
            <Background src={mainImage} />
            <ContainerItem>
                <ContainerBottom>
                    <ContainerActions>
                        <ActionsLeft>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='like' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>{likes}</span>
                            </div>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='comments' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>{'comments'}</span>
                            </div>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='reposts' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>{'reposts'}</span>
                            </div>
                        </ActionsLeft>
                        <ActionsRight>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='share' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>Поделиться</span>
                            </div>
                        </ActionsRight>
                    </ContainerActions>
                    <ContainerTags>
                        <HashTag>#Наука</HashTag>
                        <HashTag>#Метаболизм</HashTag>
                    </ContainerTags>
                </ContainerBottom>
            </ContainerItem>
        </Container>
    )
}
