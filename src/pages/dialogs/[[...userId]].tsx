import {GetServerSidePropsContext, NextPage} from "next";
import routes from "@/utils/routes";
import axios from "axios";
import {IDialogsPage} from "@/models/pages/IDialogsPage";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Head from "next/head";
import Dialogs from "@/components/Dialogs/Dialogs";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {setAuth} from "@/store/modules/auth/authSlice";
import {
    dialogsGetMessage,
    dialogsGetNewDialog,
    dialogsRoom,
    setActiveDialogs,
    setDialogs, setUserId
} from "@/store/modules/dialogs/dialogsSlice";
import {getDialogByUserId} from "@/store/modules/dialogs/dialogsThunk";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
    let auth
    let dialogs
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
        dialogs = (await query.get(`/dialogs`)).data
        user = (await query.get(`/users/me`)).data
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
            dialogs,
            user,
        },
    }
};


const DialogsPage: NextPage<IDialogsPage> = (props) => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const {userId} = router.query

    useEffect(() => {
        dispatch(setAuth({
            access_token: props.access_token,
            ...props.auth
        }))
        dispatch(setUserId(props.auth.id))
    }, [dispatch, props.access_token, props.auth])

    useEffect(() => {
        dispatch(setDialogs(props.dialogs))
    }, [dispatch, props.dialogs])

    useEffect(() => {
        if (userId?.length && userId?.length > 1) {
            router.push(`/dialogs/${userId[0]}`)
        }
        if (userId?.length && userId?.length === 1) {
            dispatch(getDialogByUserId(userId[0]))
        }
        if (!userId || userId?.length === 0) {
            dispatch(setActiveDialogs(null))
        }
    }, [dispatch, router, userId])

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
            <Dialogs/>
        </MainLayout>
    )
}

export default DialogsPage
