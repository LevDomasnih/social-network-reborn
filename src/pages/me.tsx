import Head from "next/head"
import React, {useEffect} from "react"
import {GetServerSidePropsContext, NextPage} from "next"
import routes from "../utils/routes"
import axios from "axios"
import MainLayout from "../layout/MainLayout/MainLayout"
import {Card, Menu, Post, Profile, RightSidebarFriend} from "../components"
import {useAppDispatch, useAppSelector} from "../store/hooks"
import {setAuth} from "../store/modules/auth/authSlice"
import {IMenuItem} from "../components/Menu/Menu.props"
import {IBlog} from "../models/IBlog"
import {IPost} from "../models/IPost"
import styled from "styled-components";
import {IMePage} from "../models/pages/IMePage";
import {setUserData} from "../store/modules/user/userSlice";
import {getBlogs, getPosts} from "../store/modules/user/userThunk";

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<Promise<{ props: IMePage }> | { redirect: { destination: string; permanent: boolean } }> => {
    const access_token = ctx.req.cookies.jwt
    let auth
    let blogs
    let user
    if (!access_token) {
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
            headers: {Authorization: `Bearer ${access_token}`},
        })
        auth = (await query.get(`/auth/userInfo`)).data
        user = (await query.get(`/users/me`)).data
        blogs = (await query.get(`/blogs/user/${auth.id}`)).data
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
            access_token,
            auth,
            user,
            blogs,
        },
    }
}

const ProfileStyled = styled(Profile)`
  margin-bottom: -50px;
`;

const Body = styled.div`
  flex: 1 1 0;
`;

const Cards = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  margin-bottom: 60px;
  gap: 16px;
`;

const MePage: NextPage<IMePage> = (props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setAuth({
            access_token: props.access_token,
            ...props.auth
        }))
    }, [dispatch, props.access_token, props.auth])

    useEffect(() => {

        dispatch(setUserData({
            ...props.user,
            records: {
                posts: [],
                postsLiked: [],
                postsSaved: [],
                blogs: props.blogs,
            }
        }))
    }, [dispatch, props.blogs, props.user])

    const {
        id: userId,
        profile,
        email,
        login: userLogin,
        records: {
            blogs,
            posts
        }
    } = useAppSelector(state => state.userSlice)
    const {
        login,
        id
    } = useAppSelector(state => state.authSlice)

    const menu = [
        "Все записи",
        "Блоги",
        "Посты",
        "Ответы",
        "Сохраненное",
        "Нравится",
    ]

    const menuItems: IMenuItem<IBlog | IPost>[] = [
        {
            name: "Блоги",
            data: blogs,
            component: Post,
            onSelect: () => dispatch(getBlogs(id))
        },
        {
            name: "Посты",
            data: posts,
            component: Post,
            onSelect: () => dispatch(getPosts(id))
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
            <ProfileStyled userProfile={{profile, login: userLogin, email, id: userId}}/>
            <Body>
                <Cards>
                    {/*TODO MOCK PHOTO*/}
                    <Card/>
                    <Card photo={"/card.png"}/>
                    <Card photo={"/card.png"}/>
                    <Card photo={"/card.png"}/>
                </Cards>
                <Menu menuItems={menuItems}/>
            </Body>
        </MainLayout>
    )
}

export default MePage
