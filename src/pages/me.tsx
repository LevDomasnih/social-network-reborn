import Head from "next/head"
import React, {useEffect} from "react"
import {GetServerSidePropsContext, NextPage} from "next"
import routes from "../utils/routes"
import axios from "axios"
import MainLayout from "../layout/MainLayout/MainLayout"
import {Card, Menu, Post, Profile, RightSidebarFriend} from "@/components"
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import {setAuth} from "@/store/modules/auth/authSlice"
import {IMenuItem} from "@/components/Menu/Menu.props"
import {IBlog} from "@/models/IBlog"
import {IPost} from "@/models/IPost"
import styled from "styled-components";
import {IMePage} from "@/models/pages/IMePage";
import {setUserData} from "@/store/modules/user/userSlice";
import {getBlogs, getPosts} from "@/store/modules/user/userThunk";
import {setUserId} from "@/store/modules/dialogs/dialogsSlice";
import client from "../../apollo-client";
import {
    AuthDocument,
    AuthQuery,
    UserBlogsDocument,
    UserBlogsQuery, UserBlogsQueryVariables,
    UserMeDocument,
    UserMeQuery
} from "@/generated/graphql";

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
        auth = await client.query<AuthQuery>({
            query: AuthDocument,
            errorPolicy: "all",
            context: {
                headers: {
                    cookieToken: access_token
                }
            }
        });
        user = await client.query<UserMeQuery>({
            query: UserMeDocument,
            errorPolicy: "all",
            context: {
                headers: {
                    cookieToken: access_token
                }
            }
        });
        blogs = await client.query<UserBlogsQuery, UserBlogsQueryVariables>({
            query: UserBlogsDocument,
            variables: {
                id: auth.data.auth.id
            },
            errorPolicy: "all",
            context: {
                headers: {
                    cookieToken: access_token
                }
            }
        });
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
            auth: auth.data,
            user: user.data,
            blogs: blogs.data,
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
        dispatch(setUserId(props.auth.id))
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
