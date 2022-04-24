import {MenuProps} from "./Menu.props";
import {FC} from "react";
import cn from "classnames";
import styles from './Menu.module.css'
import {Post} from "../index";
import {Tag} from "../Tag/Tag";

export const Menu: FC<MenuProps> = ({isTag, posts, menu, className, ...props}) => {


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
            {isTag && (
                <div className='py-[10px] space-y-[30px] flex flex-col text-lg font-normal'>
                    <div>Статьи авторов, которые вам могут понравиться</div>
                    <div className='space-x-[15px]'>
                        <Tag active={true}>Все</Tag>
                        <Tag>UX / UI</Tag>
                        <Tag>Бизнес</Tag>
                        <Tag>Разработка</Tag>
                        <Tag>Музыка</Tag>
                        <Tag>Здоровье</Tag>
                    </div>
                </div>
            )}
            {posts.map((post, i) => <Post key={post.time.toString() + i} {...post} />)}
        </div>
    )
}
