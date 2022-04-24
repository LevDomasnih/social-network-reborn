import React, {FC, useEffect} from "react";
import {AuthLayoutProps} from "./AuthLayout.props";
import {useAppSelector} from "../../store/hooks";
import {useRouter} from 'next/router'
import routes from "../../utils/routes";
import {Htag} from "../../components";

//TODO обработка ошибок

// const openNotification = (error: string) => {
//     notification.open({
//         message: 'Ошибка',
//         description: error
//     });
// };

const AuthLayout: FC<AuthLayoutProps> = ({children, head, ...props}) => {

    const router = useRouter()

    const {authError} = useAppSelector(state => state.authSlice)
    const {access_token} = useAppSelector(state => state.authSlice)

    // useEffect(() => {
    //     if (authError.message) {
    //         openNotification(authError.message)
    //     }
    // }, [authError])

    useEffect(() => {
        if (access_token !== '') {
            router.push(routes.me)
        }
    }, [access_token, router])


    return (
        <div className='flex flex-row h-screen'>
            <div className='basis-2/5 bg-[#F3F3F3] h-full'>
            </div>
            <div className='basis-3/5'>
                <div className='flex flex-col justify-center h-full'>
                    <div className='grid justify-items-center'>
                        <div className='w-[480px]'>
                            <Htag tag={"h1"}>{head}</Htag>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
