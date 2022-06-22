import { MenuItem, MenuProps } from "./Menu.props"
import React, { FC, useState } from "react"
import cn from "classnames"
import styles from "./Menu.module.css"
import { Avatar, Button as DefaultButton } from "../index"
import { Tag } from "../Tag/Tag"
import { IBlog } from "../../models/IBlog"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setBlogModalActive } from "../../store/records/recordsSlice"
import { createPost } from "../../store/records/recordsThunk"
import { IPost } from "../../models/IPost"
import styled from "styled-components";

const Button = styled(DefaultButton)`
  width: 134px;
`;

export const Menu: FC<MenuProps> = ({ isTag, className, menuItems, ...props }) => {
    const [activeMenu, setActiveMenu] = useState(0)
    const [postValue, setPostValue] = useState("")

    const dispatch = useAppDispatch()

    const { avatar, firstName, lastName } = useAppSelector(state => state.profileSlice)
    const { userId } = useAppSelector(state => state.authSlice)

    const items = (menuItems: MenuItem<IBlog | IPost>[]) => {
        const activeItem = menuItems.find((item, i) => i === activeMenu)
        if (!activeItem) {
            return <></>
        }
        const Component = activeItem.component
        return activeItem.data.map(el => {
            return <Component key={el.id} {...el} />
        })
    }

    const handleChangeTab = (index: number, onSelect: (...data: any) => void) => {
        setActiveMenu(index)
        onSelect()
    }

    const openBlogModal = () => {
        dispatch(setBlogModalActive(true))
    }

    const handleCreatePost = () => {
        let data = new FormData()
        data.append("text", postValue)
        dispatch(createPost({ formData: data, userId }))
        setPostValue("")
    }

    return (
        <div className="space-y-[30px] relative">
            <div className="w-full pb-[21px] border-b-[#E4E4E4] border-b-[1px] flex">
                {menuItems.map((e, i, arr) => (
                    <div key={e.name} className="flex items-center">
                        <a onClick={() => handleChangeTab(i, e.onSelect)}
                           className={cn("text-lg font-medium text-[#E4E4E4] hover:text-[#161616] cursor-pointer transition duration-300 ease-in-out", {
                               [styles.active]: i === activeMenu,
                           })}>{e.name}</a>
                        {arr.length - 1 !== i && (
                            <div className="w-[1px] h-[12px] mx-[25px] bg-[#E4E4E4]"></div>
                        )}
                    </div>
                ))}
            </div>
            {isTag && (
                <div className="py-[10px] space-y-[30px] flex flex-col text-lg font-normal">
                    <div>Статьи авторов, которые вам могут понравиться</div>
                    <div className="space-x-[15px]">
                        <Tag active={true}>Все</Tag>
                        <Tag>UX / UI</Tag>
                        <Tag>Бизнес</Tag>
                        <Tag>Разработка</Tag>
                        <Tag>Музыка</Tag>
                        <Tag>Здоровье</Tag>
                    </div>
                </div>
            )}
            <div className="rounded border border-[#E4E4E4]">
                <div className="p-[20px]">
                    <div className="mb-[30px] flex justify-between">
                        <div className="flex items-center">
                            <div className="mr-[25px] flex items-center space-x-[7px]">
                                {avatar && <Avatar img={avatar} width={22} height={22}/>}
                                <div className="text-base font-medium text-[#161616]">{`${firstName} ${lastName}`}</div>
                            </div>
                        </div>
                        <div className="space-x-[15px]">
                            <Button color="light" onClick={openBlogModal}>Написать блог</Button>
                            <Button onClick={handleCreatePost}>Создать пост</Button>
                        </div>
                    </div>
                    <div>
                        <textarea
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none"
                            rows={4}
                            placeholder="Что нового?"
                            value={postValue}
                            onChange={(e) => setPostValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {menuItems && items(menuItems)}
        </div>
    )
}
