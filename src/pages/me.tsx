import Head from "next/head"
import React, { FC, useEffect } from "react"
import { GetServerSidePropsContext } from "next"
import routes from "../utils/routes"
import axios from "axios"
import MainLayout from "../layout/MainLayout/MainLayout"
import { Blog, Card, Menu, Post, Profile, RightSidebarFriend } from "../components"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setAuth } from "../store/auth/authSlice"
import { IMe } from "../models/IMe"
import { setProfile } from "../store/profile/profileSlice"
import { instance } from "../api"
import { setBlogs } from "../store/records/recordsSlice"
import { MenuItem } from "../components/Menu/Menu.props"
import { IBlog } from "../models/IBlog"
import { getBlogs, getPosts } from "../store/records/recordsThunk"
import { IPost } from "../models/IPost"

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const token = ctx.req.cookies.jwt
    let user
    let profile
    let blogs
    if (!token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    try {
        const query = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            headers: { Authorization: `Bearer ${token}` },
        })
        user = (await query.get(`/users/me`)).data
        profile = (await query.get(`/profile/${user.id}`)).data
        blogs = (await query.get(`/blogs/user/${user.id}`)).data
    } catch (err) {
        ctx.res.setHeader("set-cookie", "jwt=; max-age=0")
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    return {
        props: {
            token,
            me: {
                user,
                profile,
                blogs,
            },
        },
    }
}

const Me: FC<IMe> = ({ token, me }) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }, [token])

    useEffect(() => {
        dispatch(setAuth({
            access_token: token,
            userId: me.user.id,
            email: me.user.email,
            login: me.user.login,
            avatar: me.profile.avatar,
            firstName: me.profile.firstName,
            lastName: me.profile.lastName,
            notifications: 0,
        }))
        dispatch(setProfile({ ...me.profile, email: me.user.email, login: me.user.login }))
        dispatch(setBlogs(me.blogs))
    }, [dispatch, me.blogs, me.profile, me.user.email, me.user.id, me.user.login, token])

    const profile = useAppSelector(state => state.profileSlice)
    const { login, userId } = useAppSelector(state => state.authSlice)
    const { blogs, posts } = useAppSelector(state => state.recordsSlice)

    const menu = [
        "Все записи",
        "Блоги",
        "Посты",
        "Ответы",
        "Сохраненное",
        "Нравится",
    ]

    const menuItems: MenuItem<IBlog | IPost>[] = [
        {
            name: "Блоги",
            data: blogs,
            component: Blog,
            onSelect: () => dispatch(getBlogs(userId))
        },
        {
            name: "Посты",
            data: posts,
            component: Post,
            onSelect: () => dispatch(getPosts(userId))
        },
    ]

    return (
        <MainLayout
            rightSidebar={<RightSidebarFriend/>}
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Profile"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            }
        >
            <Profile className="mb-[-50px]" profile={profile}/>
            <div className="flex-1">
                <div className="inline-grid gap-[16px] grid-flow-col mb-[60px]">
                    {/*TODO MOCK PHOTO*/}
                    <Card/>
                    <Card photo={"/card.png"}/>
                    <Card photo={"/card.png"}/>
                    <Card photo={"/card.png"}/>
                </div>
                <Menu menuItems={menuItems}/>
            </div>
        </MainLayout>
    )
}

export default Me
