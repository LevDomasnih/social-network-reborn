import React, {FC} from "react";
import {PostsProps} from "./Posts.props";
import {Avatar} from "../Avatar/Avatar";
import {format} from "date-fns";
import {SvgImage} from "../SvgImage/SvgImage";
import {RichEditor} from "../RichEditor/RichEditor";
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";
import {HashTag} from "../HashTag/HashTag";

export const Post: FC<PostsProps> = ({...props}) => {
    return (
        <div className='rounded border border-[#E4E4E4]'>
            <div className='p-[20px]'>
                <div className='mb-[30px] flex justify-between'>
                    <div className='flex items-center'>
                        <div className='mr-[25px] flex items-center space-x-[7px]'>
                            {/*TODO должна быть пнг или загружаемая свг*/}
                            {/*<SvgImage svg={icon as svgNames} color='#4EB000'/>*/}
                        </div>
                        <div className='mr-[25px] flex items-center space-x-[7px]'>
                            {/*{avatar && <Avatar img={avatar} width={22} height={22}/>}*/}
                            {/*<div className='text-base font-medium text-[#161616]'>{`${firstName} ${lastName}`}</div>*/}
                        </div>
                        {/*<div className='text-base font-medium text-[#B7B7B7]'>{format(new Date(createdAt), 'HH:mm').toString()}</div>*/}
                    </div>
                    <SvgImage svg='save' color='#161616'/>
                </div>
                <div>asdasdasdasd</div>
            </div>
            {/*<BackgroundImage src={mainImage} className='w-full h-[270px] relative' />*/}
            <div className='p-[20px]'>
                <div className='space-y-[25px]'>
                    <div className='flex justify-between'>
                        <div className='space-x-[20px] flex items-center'>
                            <div className='space-x-[7px] flex items-center'>
                                <SvgImage svg='like' color='#161616'/>
                                <span className='text-sm font-medium text-[#161616]'>{0}</span>
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
                </div>
            </div>
        </div>

    )

}
