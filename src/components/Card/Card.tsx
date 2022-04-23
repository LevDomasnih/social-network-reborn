import React, {FC} from "react";
import {CardProps} from "./Card.props";
import Image from "next/image";
import {SvgImage} from "../SvgImage/SvgImage";
import cn from "classnames";
import styles from './Card.module.css'

export const Card: FC<CardProps> = ({ photo , ...props }) => {
    const handleClick = () => {

    }

    return (
        <div className={cn('w-[140px] h-[175px] bg-[#F3F1FF] rounded-[3px] overflow-hidden relative', {
            [styles.card]: !photo
        })} onClick={handleClick}>
            {photo ? (
                <Image src={photo} width={140} height={175} objectFit='cover' objectPosition='center' />
            ) : (
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center'>
                    <div className='rounded-full bg-[#6962A8] w-[46px] h-[46px] relative'>
                        <SvgImage svg='plus' color='white' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                    </div>
                    <span className='mt-[6px] text-[#161616] text-sm'>Добавить</span>
                </div>
            )}
        </div>
    )
}
