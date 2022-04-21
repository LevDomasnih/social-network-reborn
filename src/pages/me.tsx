import Head from "next/head";
import React from "react";
import {GetServerSidePropsContext} from "next";
import routes from "../utils/routes";
import axios from "axios";
import MainLayout from "../layout/MainLayout/MainLayout";
import Image from "next/image";
import {Button} from "../components/Button/Button";
import {Card} from "../components/Card/Card";

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
        <div >
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Sign up page"/>
                <link rel="icon" href='/favicon.ico'/>
            </Head>
            <MainLayout>
                <div>
                    <div className='mb-[40px]'>
                        <div className='h-[240px] rounded-b-[3px] overflow-hidden'>
                            {/*TODO MOCK PHOTO*/}
                            <Image src={'/meBg.png'} height={240} width={920} objectFit='cover' objectPosition='center' />
                        </div>
                        <div className='relative top-[-90px]'>
                            <div className='mb-[60px]'>
                                <div className='pl-[30px]'>
                                    <div className='mb-[30px] flex items-end justify-between'>
                                        <div className='rounded-full h-[180px] w-[180px] bg-white flex items-center justify-center'>
                                            <div className='rounded-full overflow-hidden h-[175px] w-[175px]'>
                                                <Image src={'/avatar.png'} width={175} height={175} objectFit='cover' />
                                            </div>
                                        </div>
                                        <Button theme={'light'} className='max-w-[115px]'>Изменить</Button>
                                    </div>
                                    <div>
                                        <div className='text-3xl text-[#161616] font-medium mb-[10px]'>Сидоров Дмитрий</div>
                                        <div className='text-base text-[#AEAEAE] font-medium mb-[20px]'>@sidorovdm</div>
                                        <div className='text-base text-[#161616] font-normal mb-[15px] flex items-center'>
                                            <Image src={'/svg/cake.svg'} width={17} height={18} />
                                            <span className='ml-[8px] mr-[20px]'>15.05.1997</span>
                                            <Image src={'/svg/geo.svg'} width={17} height={18} />
                                            <span className='ml-[8px]'>Россия, Москва</span>
                                        </div>
                                        <div className='text-base font-normal text-[#161616]'>Найти себя невозможно — себя можно только создать</div>
                                    </div>
                                </div>
                                <div className='inline-grid gap-[16px] grid-flow-col mt-[40px]'>
                                    <Card />
                                    <Card photo={'/card.png'} />
                                    <Card photo={'/card.png'} />
                                    <Card photo={'/card.png'} />
                                </div>
                            </div>
                            <div>
                                Все записи
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    )
}

export default Me
