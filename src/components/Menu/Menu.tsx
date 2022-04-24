import {MenuProps} from "./Menu.props";
import {FC} from "react";
import cn from "classnames";
import styles from './Menu.module.css'
import {Post} from "../index";

export const Menu: FC<MenuProps> = () => {
    const menu = [
        'Все записи',
        'Ответы',
        'Сохраненное',
        'Нравится'
    ]

    const posts = [
        {
            likes: 82,
            comments: 6,
            reposts: 12,
            theme: 'Здоровье',
            avatar: '/avatar.png',
            icon: 'plus',
            author: 'Зайцев Константин',
            image: '/meBg.png',
            time: new Date(),
            title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма',
            text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'
        },
        {
            likes: 82,
            comments: 6,
            reposts: 12,
            theme: 'Здоровье',
            avatar: '/avatar.png',
            icon: 'plus',
            author: 'Зайцев Константин',
            time: new Date(),
            image: '/meBg.png',
            title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма',
            text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'
        }
    ]

    return (
        <div className='space-y-[30px]'>
            <div className='w-full pb-[21px] border-b-[#E4E4E4] border-b-[1px] flex'>
                {menu.map((e, i, arr) => (
                    <div key={e} className='flex items-center'>
                        <a onClick={() => {
                        }}
                           className={cn('text-lg font-medium text-[#E4E4E4] hover:text-[#161616] cursor-pointer transition duration-300 ease-in-out', {
                               [styles.active]: i === 0
                           })}>{e}</a>
                        {arr.length - 1 !== i && (
                            <div className='w-[1px] h-[12px] mx-[25px] bg-[#E4E4E4]'></div>
                        )}
                    </div>
                ))}
            </div>
            {posts.map((post, i) => <Post key={post.time.toString() + i} {...post} />)}
        </div>
    )
}
