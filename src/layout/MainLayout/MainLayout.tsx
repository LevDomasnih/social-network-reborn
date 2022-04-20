import {FC} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {Header} from "../Header/Header";
import {LeftSidebar} from "../LeftSidebar/LeftSidebar";
import Image from "next/image";

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Header />
            <div className='max-w-[1720px] h-full m-auto flex'>
                <LeftSidebar />
                <main className='flex-initial w-[920px] mx-[100px] flex justify-between flex'>
                    {children}
                </main>
                <div className='flex-initial w-[344px] flex justify-end'>
                    <div className='w-full h-[126px] flex px-[62px] bg-[#F5F7F9] justify-between'>
                        <div className='flex items-center'>
                            <div className='flex flex-col items-center space-y-[6px]'>
                                <Image src={'/svg/likes.svg'} height={16} width={15} />
                                <div className='text-2xl'>2.6K</div>
                                <div className='text-sm'>лайков</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex flex-col items-center space-y-[6px]'>
                                <Image src={'/svg/eye.svg'} height={12} width={17} />
                                <div className='text-2xl'>10K</div>
                                <div className='text-sm'>просмотров</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainLayout
