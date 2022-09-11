import {GetServerSidePropsContext, NextPage} from "next";
import React from "react";
import {IMenuItem} from "@/components/Menu/Menu.props";
import {Card, Menu, Post, Profile, RightSidebarFriend} from "@/components";
import MainLayout from "../../layout/MainLayout/MainLayout";
import Head from "next/head";
import styled from "styled-components";
import routes from "../../utils/routes";
import {IUserPage} from "@/models/pages/IUserPage";
import nextClient from "@/apolloNextClient";
import {
    BlogsFragmentDoc,
    GetUserPageDocument,
    GetUserPageQuery,
    GetUserPageQueryVariables,
    PostsFragmentDoc,
    useGetUserPageQuery
} from "@/generated/graphql";
import client from "@/apolloClient";
import {Blog} from "@/components/Blog/Blog";
import {gql} from "@apollo/client";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
    const userId: string = ctx.query!.userAlias as string
    let userPageData
    if (!access_token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    try {
        userPageData = await nextClient.query<GetUserPageQuery, GetUserPageQueryVariables>({
            variables: {id: userId},
            query: GetUserPageDocument,
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
            baseInfo: userPageData.data.baseInfo,
            user: userPageData.data.user,
            blogs: userPageData.data.blogs,
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

const UserPage: NextPage<IUserPage> = ({...props}) => {
    client.writeQuery({
        query: GetUserPageDocument,
        data: {
            ...props
        }
    })

    const {data} = useGetUserPageQuery({ssr: false})

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
                    <title>Create Next App</title>
                    <meta name="description" content="Profile"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            }
        >
            <ProfileStyled userId={data.user.id}/>
            <Body>
                <Cards>
                    <Card/>
                </Cards>
                <Menu menuItems={menuItems}/>
            </Body>
        </MainLayout>
    )
}

export default UserPage;

