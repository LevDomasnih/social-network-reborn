import Image from "next/image";
import React, {FC} from "react";
import {AvatarProps} from "./Avatar.props";
import cn from "classnames";

export const Avatar: FC<AvatarProps> = ({img, width, height, classname}) => (
    <div className={cn('rounded-full overflow-hidden', classname)} style={{width, height}}>
        <Image src={img} width={width} height={height} objectFit='cover'/>
    </div>
)
