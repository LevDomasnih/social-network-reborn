import {MenuProps} from "./Menu.props";
import {FC} from "react";
import cn from "classnames";
import styles from './Menu.module.css'
import Image from "next/image";
import Htag from "../Htag/Htag";
import {SvgImage} from "../SvgImage/SvgImage";
import {Avatar} from "../Avatar/Avatar";
import {Tag} from "../Tag/Tag";

export const Menu: FC<MenuProps> = () => {
    const menu = [
        'Все записи',
        'Ответы',
        'Сохраненное',
        'Нравится'
    ]

    const posts = [
        { likes: 82, comments: 6, reposts: 12 ,theme: 'Здоровье', avatar: '/avatar.png', icon: 'plus', author: 'Зайцев Константин', time: new Date(), title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма', text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'},
        { likes: 82, comments: 6, reposts: 12 ,theme: 'Здоровье', avatar: '/avatar.png', icon: 'plus', author: 'Зайцев Константин', time: new Date(), title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма', text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'}
    ]

    return (
        <div className='space-y-[30px]'>
            <div className='w-full pb-[21px] border-b-[#E4E4E4] border-b-[1px] flex'>
                {menu.map((e, i, arr) => (
                    <div key={e} className='flex items-center'>
                        <a onClick={() => {}} className={cn('text-lg font-medium text-[#E4E4E4] hover:text-[#161616] cursor-pointer transition duration-300 ease-in-out', {
                            [styles.active]: i === 0
                        })}>{e}</a>
                        {arr.length - 1 !== i && (
                            <div className='w-[1px] h-[12px] mx-[25px] bg-[#E4E4E4]'></div>
                        )}
                    </div>
                ))}
            </div>
            {posts.map((e, i) => (
                <div key={e.time.toString() + i} className='rounded border border-[#E4E4E4]'>
                    <div className='p-[20px]'>
                        <div className='mb-[30px] flex justify-between'>
                            <div className='flex items-center'>
                                <div className='mr-[25px] flex items-center space-x-[7px]'>
                                    <SvgImage svg={e.icon} color='#4EB000' />
                                    <div className='text-base font-medium text-[#4EB000]'>{e.theme}</div>
                                </div>
                                <div className='mr-[25px] flex items-center space-x-[7px]'>
                                    <Avatar img={e.avatar} width={22} height={22} />
                                    <div className='text-base font-medium text-[#161616]'>{e.author}</div>
                                </div>
                                <div className='text-base font-medium text-[#B7B7B7]'>1 час назад</div>
                            </div>
                            <SvgImage svg='save' color='#161616' />
                        </div>
                        <div className='space-y-[20px]'>
                            <Htag tag='h2'>{e.title}</Htag>
                            <div className='text-[14px] leading-[24px] text-[#161616]'>{e.text}</div>
                        </div>
                    </div>
                    <div className='w-full h-[270px] relative'>
                        <Image src={'/meBg.png'} layout='fill' objectFit='cover' objectPosition='center' />
                    </div>
                    <div className='p-[20px]'>
                        <div className='space-y-[25px]'>
                            <div className='flex justify-between'>
                                <div className='space-x-[20px] flex items-center'>
                                    <div className='space-x-[7px] flex items-center'>
                                        <SvgImage svg='like' color='#161616' />
                                        <span className='text-sm font-medium text-[#161616]'>{e.likes}</span>
                                    </div>
                                    <div className='space-x-[7px] flex items-center'>
                                        <SvgImage svg='comments' color='#161616' />
                                        <span className='text-sm font-medium text-[#161616]'>{e.comments}</span>
                                    </div>
                                    <div className='space-x-[7px] flex items-center'>
                                        <SvgImage svg='reposts' color='#161616' />
                                        <span className='text-sm font-medium text-[#161616]'>{e.reposts}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='space-x-[7px] flex items-center'>
                                        <SvgImage svg='share' color='#161616' />
                                        <span className='text-sm font-medium text-[#161616]'>Поделиться</span>
                                    </div>
                                </div>
                            </div>
                            <div className='space-x-[9px] flex'>
                                <Tag>#Наука</Tag>
                                <Tag>#Метаболизм</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
