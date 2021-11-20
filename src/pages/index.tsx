import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import AuthLayout from "../layout/AuthLayout/AuthLayout";
import React from 'react';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <AuthLayout>

        </AuthLayout>
    </div>
  )
}

export default Home
