import {FC} from "react";
import {PostProps} from "./Post.props";
import Image from "next/image";
import {Avatar, SvgImage, HashTag, Htag, BackgroundImage} from '../index'
import {svgNames} from "../SvgImage/SvgImage.props";
import {format} from "date-fns";

export const Post: FC<PostProps> = ({createdAt, mainImage, likes}) => {
    console.log('asdasd')
    console.log(likes)

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
                            {/*<Avatar img={'/avatar'} width={22} height={22}/>*/}
                            <div className='text-base font-medium text-[#161616]'>{'author'}</div>
                        </div>
                        <div className='text-base font-medium text-[#B7B7B7]'>{format(new Date(createdAt), 'HH:mm').toString()}</div>
                    </div>
                    {/*<SvgImage svg='save' color='#161616'/>*/}
                </div>
                <div className='space-y-[20px]'>
                    <Htag tag='h2'>{"title"}</Htag>
                    <div className='text-[14px] leading-[24px] text-[#161616]'>{"text"}</div>
                </div>
            </div>
            {/*<BackgroundImage src={mainImage} className='w-full h-[270px] relative' />*/}
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
