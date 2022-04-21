import {FC} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {Header} from "../Header/Header";
import {LeftSidebar} from "../LeftSidebar/LeftSidebar";
import {RightSidebarFriend} from "../RightSidebarFriend/RightSidebarFriend";

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='max-w-[1720px] h-full m-auto flex'>
                <LeftSidebar/>
                <main className='flex-initial w-[920px] mx-[100px] flex justify-between flex'>
                    {children}
                </main>
                <RightSidebarFriend/>
            </div>
        </div>
    )
}

export default MainLayout
