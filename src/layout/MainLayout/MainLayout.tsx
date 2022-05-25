import {FC, useState} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {Header, LeftSidebar} from "../../components";
import cn from "classnames";
import {BlogModal} from "../../components/BlogModal/BlogModal";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setBlogModalActive } from "../../store/records/recordsSlice"

const MainLayout: FC<MainLayoutProps> = ({children, rightSidebar, head, className, ...props}) => {
    const {blogModalIsActive} = useAppSelector(state => state.recordsSlice)

    return (
        <div className={cn(className, 'relative')}>
            {head}
            <Header />
            <div className='max-w-[1720px] h-full m-auto flex'>
                <LeftSidebar/>
                <main className='flex-initial w-[920px] mx-[100px] flex justify-between flex-col'>
                    {children}
                </main>
                <div className='w-[344px]'>
                    {rightSidebar}
                </div>
            </div>
            <BlogModal active={blogModalIsActive} />
        </div>
    )
}

export default MainLayout
