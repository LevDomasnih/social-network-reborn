import React, {FC} from "react";
import {HeaderProps} from "./Header.props";
import styles from './Header.module.css'
import cn from "classnames";
import {Avatar, Button as DefaultButton, Search, SvgImage} from "../index";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setBlogModalActive } from "../../store/records/recordsSlice"
import styled from "styled-components";

const Button = styled(DefaultButton)`
  width: 134px;
`;

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const dispatch = useAppDispatch()
    const {avatar} = useAppSelector(state => state.profileSlice)

    const openModal = () => {
        dispatch(setBlogModalActive(true))
    }

    return (
        <header {...props} className={cn('h-[82px] bg-black w-full', styles.header, className)}>
            <div className='max-w-[1720px] h-full m-auto items-center flex'>
                <div className='flex-1 items-center flex'>
                    <SvgImage svg='logo' color='#161616'/>
                </div>
                <div className='flex-initial w-[920px] mx-[100px] flex justify-between items-center flex'>
                    <Search placeholder='Поиск' className='w-[400px]'/>
                    <Button onClick={openModal}>Создать</Button>
                </div>
                <div className='flex-initial w-[344px] flex justify-end'>
                    <div className='mr-[40px] items-center flex'>
                        <Avatar img={avatar || '/avatar.png'} width={50} height={50}/>
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
