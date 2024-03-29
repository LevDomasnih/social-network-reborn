import MainLayout from "../layout/MainLayout/MainLayout";
import {RightSidebarInfo, Stories} from "../components";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import {NextPage} from "next";

const StoriesStyled = styled(Stories)`
  margin-top: 40px;
  margin-bottom: 60px;
`;

const InspirationPage: NextPage = (props) => {
    const menu = [
        'Для вас',
        'Подписки',
    ]

    const posts = [
        {
            likes: 82,
            comments: 6,
            reposts: 12,
            theme: 'Здоровье',
            avatar: '/avatar.png',
            icon: 'plus',
            author: 'Зайцев Константин',
            image: '/meBg.png',
            time: new Date(),
            title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма',
            text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'
        },
        {
            likes: 82,
            comments: 6,
            reposts: 12,
            theme: 'Здоровье',
            avatar: '/avatar.png',
            icon: 'plus',
            author: 'Зайцев Константин',
            time: new Date(),
            image: '/meBg.png',
            title: 'Ничего не делать и худеть — что думает наука про способы разгона метаболизма',
            text: 'Можно ли заставить тело по умолчанию сжигать или сохранять больше калорий и какие добавки этому помогут. Тема веса и физической формы есть в каждом списке дел по личной продуктивности. Сегодня обсудим всё, что поможет (и не поможет) поменять метаболизм и проще добиться нужного веса.'
        }
    ]

    return (
        <MainLayout
            rightSidebar={<RightSidebarInfo/>}
            head={
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Inspiration"/>
                    <link rel="icon" href='/favicon.ico'/>
                </Head>
            }
        >
            <StoriesStyled/>
            {/*<Menu menu={menu} posts={posts} isTag={true} />*/}
        </MainLayout>
    )
}

export default InspirationPage
