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
import {setAuth} from "@/store/modules/auth/authSlice";
import {setActiveDialogs, setDialogs, setUserId} from "@/store/modules/dialogs/dialogsSlice";
import {getDialogByUserId} from "@/store/modules/dialogs/dialogsThunk";
import nextClient from "@/apolloNextClient";
import {
    GetDialogsPageDocument,
    GetDialogsPageQuery, GetDialogsPageQueryVariables,
    GetUserPageDocument,
    GetUserPageQuery,
    GetUserPageQueryVariables, useGetDialogQuery
} from "@/generated/graphql";
import client from "@/apolloClient";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const access_token = ctx.req.cookies.jwt
    let dialogsPageData
    if (!access_token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        }
    }
    try {
        dialogsPageData = await nextClient.query<GetDialogsPageQuery, GetDialogsPageQueryVariables>({
            query: GetDialogsPageDocument,
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
            baseInfo: dialogsPageData.data.baseInfo,
            dialogs: dialogsPageData.data.dialogs
        },
    }
};


const DialogsPage: NextPage<IDialogsPage> = (props) => {
    client.writeQuery({
        query: GetDialogsPageDocument,
        data: {
            ...props
        }
    })

    const dispatch = useAppDispatch()
    const router = useRouter()

    const {userId} = router.query

    useEffect(() => {
        if (userId?.length && userId?.length > 1) {
            router.push(`/dialogs/${userId[0]}`)
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
