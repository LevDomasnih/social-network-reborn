import React, {FC} from "react";
import {RightSidebarFriendProps} from "./RightSidebarFriend.props";
import cn from "classnames";
import {SvgImage} from "../../components/SvgImage/SvgImage";
import {Avatar} from "../../components/Avatar/Avatar";
import {Tag} from "../../components/Tag/Tag";

export const RightSidebarFriend: FC<RightSidebarFriendProps> = ({className, ...props}) => {
    const friend = [
        1,2,3,4,5,6,7,8,9
    ]

    const tags = [
        'Вирус',
        'Программирование',
        'Figma',
        'Продуктивность',
        'Тайм-менеджмент'
    ]

    return (
        <div className={cn('flex-initial w-[344px] flex flex-col space-y-[35px]', className)}>
            <div className='w-full h-[126px] flex px-[62px] bg-[#F5F7F9] justify-between'>
                <div className='flex items-center'>
                    <div className='flex flex-col items-center space-y-[6px]'>
                        <SvgImage svg='like' color='#161616' />
                        <div className='text-3xl font-medium'>2.6K</div>
                        <div className='text-base font-normal'>лайков</div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex flex-col items-center space-y-[6px]'>
                        <SvgImage svg='eye' color='#161616' />
                        <div className='text-3xl font-medium'>10K</div>
                        <div className='text-base font-normal'>просмотров</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mb-[25px]'>
                    <span className='font-medium text-base text-[#161616]'>Подписчики</span>
                    <span className='font-medium text-[14px] leading-[24px] text-[#AEAEAE] ml-[10px]'>10.2K</span>
                </div>
                <div className={cn("grid grid-cols-3 gap-y-[25px]")}>
                    {friend.map(e => (
                        <a href='' key={e} className='flex flex-col items-center'>
                            <Avatar img='/avatar.png' width={56} height={56} />
                            <div className='text-center font-medium text-sm text-[#161616]'>Емельянова Любовь</div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <div className='mb-[25px]'>
                    <span className='font-medium text-base text-[#161616]'>Подписки</span>
                    <span className='font-medium text-[14px] leading-[24px] text-[#AEAEAE] ml-[10px]'>200</span>
                </div>
                <div className={cn("grid grid-cols-3 gap-y-[25px]")}>
                    {friend.map(e => (
                        <a href='' key={e} className='flex flex-col items-center'>
                            <Avatar img='/avatar.png' width={56} height={56} />
                            <div className='text-center font-medium text-sm text-[#161616]'>Емельянова Любовь</div>
                        </a>
                    ))}
                </div>
            </div>
            <div>
                <div className='mb-[25px] font-medium text-base text-[#161616]'>Популярные хештэги</div>
                <div className='flex flex-wrap gap-y-[9px]'>
                    {tags.map(e => (
                        <Tag key={e} className="mr-[9px]">#{e}</Tag>
                    ))}
                </div>
            </div>
        </div>
    )
}
