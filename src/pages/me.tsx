import Head from "next/head";
import React from "react";
import {GetServerSidePropsContext} from "next";
import routes from "../utils/routes";
import axios from "axios";
import MainLayout from "../layout/MainLayout/MainLayout";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {

    const token = ctx.req.cookies.jwt;
    let userData;

    if (!token) {
        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        };
    }

    try {
        userData = await axios.get(`${process.env.API_URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });

    } catch (err) {
        ctx.res.setHeader('set-cookie', 'jwt=; max-age=0')

        return {
            redirect: {
                destination: routes.unauthorized,
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: userData.data,
        },
    };
};

const Me = (props: any) => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Sign up page"/>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <MainLayout>
                userPage!!!
            </MainLayout>
        </div>
    )
}

export default Me
