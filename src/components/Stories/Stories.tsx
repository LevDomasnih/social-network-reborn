import React, {FC} from "react";
import {StoriesProps} from "./Stories.props";
import cn from "classnames";
import {Avatar, Htag, SvgImage} from "../index";
import {Story} from "../Story/Story";

export const Stories: FC<StoriesProps> = ({className, ...props}) => {
  return (
      <div className={cn('space-y-[30px]', className)}>
          <Htag tag='h3'>Истории</Htag>
          <div className='flex flex-row h-[66px]'>
              <Story  />
              <Story avatar='/avatar.png' author='Лев' />
              <Story avatar='/avatar.png' author='Лев' />
              <Story avatar='/avatar.png' author='Лев' />
              <Story avatar='/avatar.png' author='Лев' isVideo={true} />
              <Story avatar='/avatar.png' author='Лев' isVideo={true} />
              <Story avatar='/avatar.png' author='Лев' isVideo={true} />
              <Story avatar='/avatar.png' author='Лев' isVideo={true} />
          </div>
      </div>
  )
}
