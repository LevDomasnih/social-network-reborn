import {GetServerSidePropsContext, NextPage} from "next";
import routes from "@/utils/routes";
import axios from "axios";
import {IDialogsPage} from "@/models/pages/IDialogsPage";
import {useAppDispatch} from "@/store/hooks";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Head from "next/head";
import Dialogs from "@/components/Dialogs/Dialogs";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
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
        },
    }
};


const DialogsPage: NextPage<IDialogsPage> = (props) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const {userId} = router.query

    useEffect(() => {
        if (userId?.length && userId?.length > 1) {
            router.push(`/dialogs/${userId[0]}`)
        }
    }, [router, userId])

    // TODO ДВА ЗАПРОСА ЗА ДАННЫМИ 1) за диалогами 2) за диалогом с пользователем [userId]

    return (
        <MainLayout
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Articles"/>
                    <link rel="icon" href='/favicon.ico'/>
                </Head>
            }
        >
            <Dialogs />
        </MainLayout>
    )
}

export default DialogsPage
