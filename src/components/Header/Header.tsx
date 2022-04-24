import React, {FC} from "react";
import {HeaderProps} from "./Header.props";
import styles from './Header.module.css'
import cn from "classnames";
import {Avatar, Button, Search, SvgImage} from "../index";
import {useAppSelector} from "../../store/hooks";

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const { avatar } = useAppSelector(state => state.profileSlice)

    return (
        <header {...props} className={cn('h-[82px] bg-black w-full', styles.header, className)}>
            <div className='max-w-[1720px] h-full m-auto items-center flex'>
                <div className='flex-1 items-center flex'>
                    <SvgImage svg='logo' color='#161616'/>
                </div>
                <div className='flex-initial w-[920px] mx-[100px] flex justify-between items-center flex'>
                    <Search placeholder='Поиск' className='w-[400px]'/>
                    <Button className='w-[134px]'>Создать</Button>
                </div>
                <div className='flex-initial w-[344px] flex justify-end'>
                    <div className='mr-[40px] items-center flex'>
                        {/*TODO MOCK PHOTO*/}
                        <Avatar img={avatar || '/avatar.png'} width={50} height={50} />
                    </div>
                    <div className='mr-[30px] items-center flex'>
                        <SvgImage svg='mail' color='#161616'/>
                    </div>
                    <div className='items-center flex'>
                        <SvgImage svg='setting' color='#161616'/>
                    </div>
                </div>
            </div>
        </header>
    )
}
