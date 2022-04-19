import {FC, useEffect, useState} from "react";
import {HeaderProps} from "./Header.props";
import styles from './Header.module.css'
import cn from "classnames";
import Image from "next/image";
import {Button} from "../../components/Button/Button";
import {Search} from "../../components/Search/Search";

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    return (
        <header {...props} className={cn('h-[82px] bg-black w-full', styles.header, className)}>
            <div className='max-w-[1720px] h-full m-auto items-center flex'>
                <div className='flex-1 items-center flex'>
                    <Image src={'/svg/logo.svg'} height={30} width={177} />
                </div>
                <div className='flex-initial w-[920px] mx-[100px] flex justify-between items-center flex'>
                    <Search placeholder='Поиск' className='w-[400px]' />
                    <Button className='w-[134px]'>Создать</Button>
                </div>
                <div className='flex-initial w-[344px] flex justify-end'>
                    <div className='mr-[40px] items-center flex'>
                        <div className='rounded-full overflow-hidden h-[50px] w-[50px]'>
                            <Image src={'/svg/img.png'} width={50} height={50} objectFit='cover' />
                        </div>
                    </div>
                    <div className='mr-[30px] items-center flex'>
                        <Image src={'/svg/mail.svg'} height={13} width={17} />
                    </div>
                    <div className='items-center flex'>
                        <Image src={'/svg/settings.svg'} height={16} width={16} />
                    </div>
                </div>
            </div>
        </header>
    )
}
