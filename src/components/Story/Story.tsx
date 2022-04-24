import {SvgImage} from "../SvgImage/SvgImage";
import React, {FC} from "react";
import {StoryProps} from "./Story.props";
import cn from "classnames";
import {Avatar} from "../Avatar/Avatar";
import styles from './Story.module.css'
import Image from "next/image";

export const Story: FC<StoryProps> = ({className, avatar, author, isVideo, ...props}) => {
    return (
        <div className={cn('flex flex-col items-center mr-[33px]', className, {
            [styles.storyVideo]: isVideo
        })}>
            <div className={cn('relative flex items-center', {
                [styles.default]: !isVideo && !avatar
            })}>
                <div
                    className={cn('z-10 rounded-full bg-[#6962A8] w-[46px] h-[46px] flex items-center justify-center relative', {
                        [styles.rounded]: avatar
                    })}>
                    {isVideo ? (
                        <>
                            <Avatar img='/meBg.png' width={38} height={38} />
                            <div className={cn('rounded-full w-[38px] h-[38px] absolute', styles.videoWrapper)}>
                                <div className={cn('w-[38px] h-[38px] relative', styles.video)}>
                                    <SvgImage svg='play' color='#FFF'
                                              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                                </div>
                            </div>
                        </>
                    ) : avatar ? <Avatar img={avatar} width={38} height={38}/> : (
                        <SvgImage svg='plus' color='white'
                                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
                    )}
                </div>
                {isVideo && (
                    <div className='relative h-[38px] w-[87px]'>
                        <div className='absolute right-0'>
                            <div className='w-[100px] h-[38px] relative rounded-sm overflow-hidden'>
                                <Image src='/meBg.png' layout='fill' objectFit='cover'/>
                            </div>
                        </div>
                    </div>
                )}
                <div className='absolute bottom-0'>
                    <div className={cn('relative flex items-center justify-center w-[46px]', {
                        [styles.default]: !isVideo && !avatar
                    })}>
                        <div className='absolute top-[6px] text-[#161616] text-sm'>{author ?? 'Добавить'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
