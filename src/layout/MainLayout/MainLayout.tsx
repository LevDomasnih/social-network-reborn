import {FC} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {LeftSidebar, Header} from "../../components";

const MainLayout: FC<MainLayoutProps> = ({children, rightSidebar, head, className, ...props}) => {
    return (
        <div className={className}>
            {head}
            <Header/>
            <div className='max-w-[1720px] h-full m-auto flex'>
                <LeftSidebar/>
                <main className='flex-initial w-[920px] mx-[100px] flex justify-between flex-col'>
                    {children}
                </main>
                <div className='w-[344px]'>
                    {rightSidebar}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
