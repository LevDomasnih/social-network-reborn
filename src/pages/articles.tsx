import MainLayout from "../layout/MainLayout/MainLayout";
import Head from "next/head";
import React from "react";
import {Menu} from "../components";
import {Stories} from "../components/Stories/Stories";

const Articles = () => {
    return (
        <MainLayout
            rightSidebar={<></>}
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Articles"/>
                    <link rel="icon" href='/favicon.ico'/>
                </Head>
            }
        >
            <Stories className='mt-[40px] mb-[60px]' />
            <Menu />
        </MainLayout>
    )
}

export default Articles
