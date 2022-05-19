import React, { FC, useState } from "react"
import {PostProps} from "./Post.props";
import Image from "next/image";
import { Avatar, SvgImage, HashTag, Htag, BackgroundImage, RichEditor } from "../index"
import {svgNames} from "../SvgImage/SvgImage.props";
import {format} from "date-fns";
import { convertFromRaw, EditorState, RawDraftContentBlock } from "draft-js"

export const Post: FC<PostProps> = ({textBlocks, createdAt, mainImage, likes, profile: { firstName, lastName, middleName, avatar }, ...props}) => {
    const editor = EditorState.createWithContent(convertFromRaw({
        blocks: textBlocks as RawDraftContentBlock[],
        entityMap: props.entityMap
    }))
    return (
        <div className='rounded border border-[#E4E4E4]'>
            <div className='p-[20px]'>
                <div className='mb-[30px] flex justify-between'>
                    <div className='flex items-center'>
                        <div className='mr-[25px] flex items-center space-x-[7px]'>
                            {/*TODO должна быть пнг или загружаемая свг*/}
                            {/*<SvgImage svg={icon as svgNames} color='#4EB000'/>*/}
                            <div className='text-base font-medium text-[#4EB000]'>{'theme'}</div>
                        </div>
                        <div className='mr-[25px] flex items-center space-x-[7px]'>
                            {avatar && <Avatar img={avatar} width={22} height={22}/>}
                            <div className='text-base font-medium text-[#161616]'>{`${firstName} ${lastName}`}</div>
                        </div>
                        <div className='text-base font-medium text-[#B7B7B7]'>{format(new Date(createdAt), 'HH:mm').toString()}</div>
                    </div>
                    <SvgImage svg='save' color='#161616'/>
                </div>
                <RichEditor editorState={editor} className='' readonly={true}/>
            </div>
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
        </div>

    )
}
