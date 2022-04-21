import {FC} from "react";
import {RightSidebarFriendProps} from "./RightSidebarFriend.props";
import cn from "classnames";
import Image from "next/image";

export const RightSidebarFriend: FC<RightSidebarFriendProps> = ({className, ...props}) => {
    return (
        <div className={cn('flex-initial w-[344px] flex justify-end', className)}>
            <div className='w-full h-[126px] flex px-[62px] bg-[#F5F7F9] justify-between'>
                <div className='flex items-center'>
                    <div className='flex flex-col items-center space-y-[6px]'>
                        <Image src={'/svg/likes.svg'} height={16} width={15}/>
                        <div className='text-3xl font-medium'>2.6K</div>
                        <div className='text-base font-normal'>лайков</div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex flex-col items-center space-y-[6px]'>
                        <Image src={'/svg/eye.svg'} height={12} width={17}/>
                        <div className='text-3xl font-medium'>10K</div>
                        <div className='text-base font-normal'>просмотров</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
