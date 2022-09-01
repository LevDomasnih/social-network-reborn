import Head from "next/head";
import React from "react";
import styled from "styled-components";
import {GetServerSidePropsContext, NextPage} from "next";
import Link from "next/link";
import MainLayout from "../../layout/MainLayout/MainLayout";
import {Avatar, Button, Search} from "../../components";
import routes from "../../utils/routes";
import {IUsersPage} from "../../models/pages/IUsersPage";
import {useRouter} from 'next/router'
import nextClient from "@/apolloNextClient";
import {
    GetUsersPageDocument,
    GetUsersPageQuery,
    GetUsersPageQueryVariables,
    useGetUsersPageQuery
} from "@/generated/graphql";
import client from "@/apolloClient";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
    let usersPageData
    if (!access_token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    try {
        usersPageData = await nextClient.query<GetUsersPageQuery, GetUsersPageQueryVariables>({
            query: GetUsersPageDocument,
            errorPolicy: "all",
            context: {
                headers: {
                    cookieToken: access_token
                }
            },
        })
        console.log(usersPageData)
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
            baseInfo: usersPageData.data.baseInfo,
            users: usersPageData.data.users,
        },
    }
}

const MainBody = styled.div`
  margin-top: 20px;

  > * {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const UsersWrapper = styled.div`
  > * {
    border-bottom: 1px solid ${(props) => props.theme.colors.whiteGrey};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const UserBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserBlock = styled.a`
  display: flex;
  align-items: center;
  padding: 20px 0;
  cursor: pointer;
`;

const UserInfo = styled.div`
  margin-left: 40px;
`;

const UserFio = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
`;

const UserAddInfo = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
`;

const StyledButton = styled(Button)`
  width: 120px;
`;

const Users: NextPage<IUsersPage> = (props) => {
    client.writeQuery({
        query: GetUsersPageDocument,
        data: {
            ...props
        }
    })

    const {data} = useGetUsersPageQuery({ssr: false});

    const router = useRouter()

    if (!data) {
        return null
    }

    return (
        <MainLayout
            rightSidebar={<></>}
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Users"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
            }
        >
            <MainBody>
                <Search placeholder={'Найти пользователя'}/>
                <UsersWrapper>
                    {data.users.map(e => (
                        <UserBlockWrapper key={e.id}>
                            <div>
                                <Link href={`users/${e.id}`}>
                                    <UserBlock>
                                        <Avatar img={e.profile.avatar?.filePath || '/avatar.png'} width={80}
                                                height={80}/>
                                        <UserInfo>
                                            <UserFio>{e.profile.firstName} {e.profile.lastName} {e.profile.middleName}</UserFio>
                                            <UserAddInfo>{e.email}</UserAddInfo>
                                            {e.email !== e.login && <UserAddInfo>{e.login}</UserAddInfo>}
                                        </UserInfo>
                                    </UserBlock>
                                </Link>
                            </div>
                            <StyledButton onClick={() => router.push(`/dialogs/${e.id}`)}>Написать</StyledButton>
                        </UserBlockWrapper>
                    ))}
                </UsersWrapper>
            </MainBody>
        </MainLayout>

    )
}

export default Users;
