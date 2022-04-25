import Head from "next/head";
import React, {FC, useEffect} from "react";
import {GetServerSidePropsContext} from "next";
import routes from "../utils/routes";
import axios from "axios";
import MainLayout from "../layout/MainLayout/MainLayout";
import Image from "next/image";
import {Avatar, Button, Card, Input, Menu, Profile, RightSidebarFriend, SvgImage} from "../components";
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

    const profile = useAppSelector(state => state.profileSlice)
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
            <Profile className='mb-[-50px]' profile={profile} />
            <div>
                <div className='inline-grid gap-[16px] grid-flow-col mb-[60px]'>
                    {/*TODO MOCK PHOTO*/}
                    <Card/>
                    <Card photo={'/card.png'}/>
                    <Card photo={'/card.png'}/>
                    <Card photo={'/card.png'}/>
                </div>
                <Menu menu={menu} posts={posts}/>
            </div>
        </MainLayout>
    )
}

export default Me
