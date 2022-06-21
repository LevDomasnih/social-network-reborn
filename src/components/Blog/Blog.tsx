import React, { FC, useState } from "react"
import {BlogProps} from "./Blog.props";
import { Avatar, SvgImage, HashTag, Htag, BackgroundImage, RichEditor } from "../index"
import {format} from "date-fns";
import { convertFromRaw, EditorState, RawDraftContentBlock } from "draft-js"
import styled from "styled-components"

const Container = styled.div`
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #E4E4E4;
`;

const ContainerUp = styled.div`
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

const Theme = styled.div`
`;

export const Blog: FC<BlogProps> = ({textBlocks, createdAt, mainImage, likes, profile: { firstName, lastName, middleName, avatar }, ...props}) => {
    const editor = EditorState.createWithContent(convertFromRaw({
        blocks: textBlocks as RawDraftContentBlock[],
        entityMap: props.entityMap
    }))
    return (
        <Container>
            <ContainerUp>
                <ContainerInfo>
                    <Info>
                        <InfoItem>
                            {/*TODO должна быть пнг или загружаемая свг*/}
                            {/*<SvgImage svg={icon as svgNames} color='#4EB000'/>*/}
                            <div className='text-base font-medium text-[#4EB000]'>{'theme'}</div>
                        </InfoItem>
                        <InfoItem>
                            {avatar && <Avatar img={avatar} width={22} height={22}/>}
                            <div className='text-base font-medium text-[#161616]'>{`${firstName} ${lastName}`}</div>
                        </InfoItem>
                        <div className='text-base font-medium text-[#B7B7B7]'>{format(new Date(createdAt), 'HH:mm').toString()}</div>
                    </Info>
                    <SvgImage svg='save' color='#161616'/>
                </ContainerInfo>
                <RichEditor editorState={editor} className='' readonly={true}/>
            </ContainerUp>
            <BackgroundImage src={mainImage} className='w-full h-[270px] relative' />
            <div className='p-[20px]'>
                <div className='space-y-[25px]'>
                    <div className='flex justify-between'>
                        <div className='space-x-[20px] flex items-center'>
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
                        </div>
                        <div>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='share' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>Поделиться</span>
                            </div>
                        </div>
                    </div>
                    <div className='space-x-[9px] flex'>
                        <HashTag>#Наука</HashTag>
                        <HashTag>#Метаболизм</HashTag>
                    </div>
                </div>
            </div>
        </Container>
    )
}
