import React, {FC} from "react";
import {RightSidebarInfoProps} from "./RightSidebarInfo.props";
import cn from "classnames";
import styles from './RightSidebarInfo.module.css'
import {SvgImage} from "../SvgImage/SvgImage";
import {HashTag} from "../HashTag/HashTag";
import {Avatar} from "../Avatar/Avatar";

export const RightSidebarInfo: FC<RightSidebarInfoProps> = ({...props}) => {
    const tags = [
        'Вирус',
        'Программирование',
        'Figma',
        'Продуктивность',
        'Тайм-менеджмент'
    ]

    return (
        <div className='space-y-[60px] mt-[40px]'>
            <div className='bg-[#6962A8] p-[20px] rounded-[3px]'>
                <div className='text-base font-bold text-white'>Заполните свой профиль</div>
                <div className={cn('divide-y mt-[25px] divide-[#8E86D5]')}>
                    <div className={cn('flex justify-between', styles.info)}>
                        <div className={cn('text-sm font-bold text-white')}>Добавить фото профиля</div>
                        <SvgImage svg='arrow' color='white' />
                    </div>
                    <div className={cn('flex justify-between', styles.info)}>
                        <div className={cn('text-sm font-bold text-white')}>Добавить фон профиля</div>
                        <SvgImage svg='arrow' color='white' />
                    </div>
                    <div className={cn('flex justify-between', styles.info)}>
                        <div className={cn('text-sm font-bold text-white')}>Изменение доступности</div>
                        <SvgImage svg='arrow' color='white' />
                    </div>
                    <div className={cn('flex justify-between', styles.info)}>
                        <div className={cn('text-sm font-bold text-white')}>Создайте первый проект</div>
                        <SvgImage svg='arrow' color='white' />
                    </div>
                </div>
            </div>
            <div>
                <div className='mb-[25px] font-medium text-base text-[#161616]'>Может быть интересно</div>
                <div className='space-y-[25px]'>
                    <div className='flex justify-between items-center'>
                        <div className='space-x-[12px] flex'>
                            <Avatar img='/avatar.png' width={40} height={40} />
                            <div className='flex flex-col'>
                                <div className='text-[12px] font-medium leading-[20px]'>Сергеев Матвей</div>
                                <div className='text-[12px] font-medium leading-[20px] text-[#AEAEAE]'>@matveyserg</div>
                            </div>
                        </div>
                        <SvgImage svg='addFriend' color='#161616' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='space-x-[12px] flex'>
                            <Avatar img='/avatar.png' width={40} height={40} />
                            <div className='flex flex-col'>
                                <div className='text-[12px] font-medium leading-[20px]'>Сергеев Матвей</div>
                                <div className='text-[12px] font-medium leading-[20px] text-[#AEAEAE]'>@matveyserg</div>
                            </div>
                        </div>
                        <SvgImage svg='addFriend' color='#161616' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='space-x-[12px] flex'>
                            <Avatar img='/avatar.png' width={40} height={40} />
                            <div className='flex flex-col'>
                                <div className='text-[12px] font-medium leading-[20px]'>Сергеев Матвей</div>
                                <div className='text-[12px] font-medium leading-[20px] text-[#AEAEAE]'>@matveyserg</div>
                            </div>
                        </div>
                        <SvgImage svg='addFriend' color='#161616' />
                    </div>
                </div>
            </div>
            <div>
                <div className='mb-[25px] font-medium text-base text-[#161616]'>Популярные хештэги</div>
                <div className='flex flex-wrap gap-y-[9px]'>
                    {tags.map(e => (
                        <HashTag key={e} className="mr-[9px]">#{e}</HashTag>
                    ))}
                </div>
            </div>
        </div>
    )
}
