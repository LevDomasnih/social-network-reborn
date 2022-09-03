import Head from "next/head"
import React, {useEffect} from "react"
import {GetServerSidePropsContext, NextPage} from "next"
import routes from "../utils/routes"
import MainLayout from "../layout/MainLayout/MainLayout"
import {Card, Menu, Post, Profile, RightSidebarFriend} from "@/components"
import {IMenuItem} from "@/components/Menu/Menu.props"
import styled from "styled-components";
import {IMePage} from "@/models/pages/IMePage";
import {
    BlogsFragmentDoc,
    GetUserMePageDocument,
    GetUserMePageQuery,
    PostsFragmentDoc,
    useGetUserMePageQuery
} from "@/generated/graphql";
import {gql} from "@apollo/client";
import nextClient from "@/apolloNextClient";
import client from "@/apolloClient";
import {Blog} from "@/components/Blog/Blog";

export const getServerSideProps = async (ctx: GetServerSidePropsContext): Promise<Promise<{ props: IMePage }> | { redirect: { destination: string; permanent: boolean } }> => {
    const access_token = ctx.req.cookies.jwt
    let mePageData
    if (!access_token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    try {
        mePageData = await nextClient.query<GetUserMePageQuery>({
            query: GetUserMePageDocument,
            errorPolicy: "all",
            context: {
                headers: {
                    cookieToken: access_token
                }
            },
        })
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
            baseInfo: mePageData.data.baseInfo,
            user: mePageData.data.user,
            blogs: mePageData.data.blogs,
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

    useEffect(() => {
        client.writeQuery({
            query: GetUserMePageDocument,
            data: {
                ...props
            }
        })
    }, [props])

    const {data} = useGetUserMePageQuery({ssr: false})

    const menu = [
        "Все записи",
        "Блоги",
        "Посты",
        "Ответы",
        "Сохраненное",
        "Нравится",
    ]

    const menuItems: IMenuItem[] = [
        {
            name: "Блоги",
            component: Blog,
            query: gql`
                ${BlogsFragmentDoc}
                query GetUserBlogs($id: ID!) {
                    menuItems: blogsOfUser(id: $id) {
                        ...Blogs
                    }
                }
            `
        },
        {
            name: "Посты",
            component: Post,
            query: gql`
                ${PostsFragmentDoc}
                query GetUserPosts($id: ID!) {
                    menuItems: posts(userId: $id) {
                        ...Posts
                    }
                }
            `
        },
    ]

    if (!data) {
        return null;
    }

    return (
        <MainLayout
            rightSidebar={<RightSidebarFriend/>}
            head={
                <Head>
                    <title>{data.user.profile.firstName} {data.user.profile.lastName}</title>
                    <meta name="description" content="Profile"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            }
        >
            <ProfileStyled userId={data.user.id}/>
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
