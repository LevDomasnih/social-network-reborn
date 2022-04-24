import Head from "next/head";
import React, {FC, useEffect} from "react";
import {GetServerSidePropsContext} from "next";
import routes from "../utils/routes";
import axios from "axios";
import MainLayout from "../layout/MainLayout/MainLayout";
import Image from "next/image";
import {Avatar, Button, Card, Menu, RightSidebarFriend, SvgImage} from "../components";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {setAuth} from "../store/auth/authSlice";
import {IMe} from "../models/IMe";
import {setProfile} from "../store/profile/profileSlice";
import { format } from 'date-fns'

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    const token = ctx.req.cookies.jwt;
    let userData;

    if (!token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        };
    }

    try {
        userData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
            headers: {Authorization: `Bearer ${token}`},
        });

    } catch (err) {
        ctx.res.setHeader('set-cookie', 'jwt=; max-age=0')

        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        };
    }

    return {
        props: {
            token,
            user: userData.data,
        },
    };
};

const Me: FC<IMe> = ({token, user}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setAuth({token, userId: user.id, email: user.email, login: user.login}))
        dispatch(setProfile(user.profile))
    }, [dispatch, token, user.email, user.id, user.login, user.profile])

    const {avatar, status, birthday, city, country, firstName, lastName} = useAppSelector(state => state.profileSlice)
    const {login} = useAppSelector(state => state.authSlice)

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
        <MainLayout
            rightSidebar={<RightSidebarFriend/>}
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Profile"/>
                    <link rel="icon" href='/favicon.ico'/>
                </Head>
            }
        >
            <div>
                <div className='mb-[40px]'>
                    <div className='h-[240px] rounded-b-[3px] overflow-hidden'>
                        <Image src={'/meBg.png'} height={240} width={920} objectFit='cover' objectPosition='center'/>
                    </div>
                    <div className='relative top-[-90px]'>
                        <div className='mb-[60px]'>
                            <div className='pl-[30px]'>
                                <div className='mb-[30px] flex items-end justify-between'>
                                    <div
                                        className='rounded-full h-[180px] w-[180px] bg-white flex items-center justify-center'>
                                        <Avatar img={avatar || '/avatar.png'} width={175} height={175}/>
                                    </div>
                                    <Button theme={'light'} className='max-w-[115px]'>Изменить</Button>
                                </div>
                                <div>
                                    <div
                                        className='text-3xl text-[#161616] font-medium mb-[10px]'>{firstName} {lastName}</div>
                                    <div className='text-base text-[#AEAEAE] font-medium mb-[20px]'>@{login}</div>
                                    <div className='text-base text-[#161616] font-normal mb-[15px] flex items-center'>
                                        {birthday && (
                                            <>
                                                <SvgImage svg='cake' color='#161616'/>
                                                <span className='ml-[8px] mr-[20px]'>{format(new Date(birthday), 'dd.MM.yyyy')}</span>
                                            </>
                                        )}
                                        <SvgImage svg='geo' color='#161616'/>
                                        <span className='ml-[8px]'>{country}, {city}</span>
                                    </div>
                                    {status && <div className='text-base font-normal text-[#161616]'>{status}</div>}
                                </div>
                            </div>
                            <div className='inline-grid gap-[16px] grid-flow-col mt-[40px]'>
                                {/*TODO MOCK PHOTO*/}
                                <Card/>
                                <Card photo={'/card.png'}/>
                                <Card photo={'/card.png'}/>
                                <Card photo={'/card.png'}/>
                            </div>
                        </div>
                        <Menu menu={menu} posts={posts}/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Me
