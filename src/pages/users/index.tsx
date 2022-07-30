import Head from "next/head";
import React, {useEffect} from "react";
import styled from "styled-components";
import {GetServerSidePropsContext, NextPage} from "next";
import axios from "axios";
import Link from "next/link";
import MainLayout from "../../layout/MainLayout/MainLayout";
import {Avatar, Button, Search} from "../../components";
import routes from "../../utils/routes";
import {setAuth} from "../../store/modules/auth/authSlice";
import {useAppDispatch} from "../../store/hooks";
import {IUsersPage} from "../../models/pages/IUsersPage";
import { useRouter } from 'next/router'
import {setUserId} from "@/store/modules/dialogs/dialogsSlice";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
    let users
    let auth
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
        users = (await query.get(`/users`)).data
        auth = (await query.get(`/auth/userInfo`)).data
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
            users
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
    const dispatch = useAppDispatch()
    const router = useRouter()

    useEffect(() => {
        dispatch(setAuth({
            access_token: props.access_token,
            ...props.auth
        }))
        dispatch(setUserId(props.auth.id))
    }, [dispatch, props.access_token, props.auth])

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
                    {props.users.map(e => (
                        <UserBlockWrapper key={e.id}>
                            <div>
                                <Link href={`users/${e.id}`} >
                                    <UserBlock>
                                        <Avatar img={e.profile.avatar || '/avatar.png'} width={80} height={80}/>
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
