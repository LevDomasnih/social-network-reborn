import React, {FC} from "react";
import {CardProps} from "./Card.props";
import Image from "next/image";

export const Card: FC<CardProps> = ({ photo , ...props }) => {
    return (
        <div className='w-[140px] h-[175px] bg-[#F3F1FF] rounded-[3px] overflow-hidden'>
            {photo && (
                <Image src={photo} width={140} height={175} objectFit='cover' objectPosition='center' />
            )}
        </div>
    )
}
