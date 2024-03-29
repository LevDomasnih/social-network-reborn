import React, {FC, useEffect} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {Header, LeftSidebar} from "@/components";
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import dynamic from "next/dynamic";
import styled from "styled-components";
import Push from "@/components/Push/Push";
import {dialogsGetMessage, dialogsGetNewDialog, dialogsRoom} from "@/store/modules/dialogs/dialogsSlice";
import {useOnMessageAddedSubscription} from "@/generated/graphql";

const BlogModal = dynamic(
    () => import('../../components/BlogModal/BlogModal'),
    // { loading: () => <div style={{backgroundColor: 'red', height: 500, width: 500}}></div>, ssr: false } // FIXME ПРОВЕРИТЬ ЛЕНИВУЮ ЗАГРУЗКУ
)

const Container = styled.div`
  position: relative;
`;

const Body = styled.div`
  display: flex;
  height: 100%;
  max-width: 1720px;
  margin: auto;
`;

const BodyWrapper = styled.div`
  padding: 0 80px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: space-between;
  width: 920px;
  margin: 0 100px;
`;

const RightSidebarWrapper = styled.div`
  width: 344px;
`;

const MainLayout: FC<MainLayoutProps> = ({children, rightSidebar, head, className, ...props}) => {
    const {blogModalIsActive} = useAppSelector(state => state.userSlice)
    const {access_token} = useAppSelector(state => state.authSlice)

    // useOnMessageAddedSubscription({
    //     onSubscriptionData: (options) => {
    //         console.log(options)
    //     }
    // })

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (access_token) {
    //         dispatch(dialogsRoom())
    //         dispatch(dialogsGetMessage())
    //         dispatch(dialogsGetNewDialog())
    //     }
    //
    //     return () => {
    //         dispatch(dialogsGetMessage('unsubscribe'))
    //         dispatch(dialogsGetNewDialog('unsubscribe'))
    //     }
    // }, [dispatch, access_token])

    return (
        <Container className={className}>
            {head}
            <Header/>
            <BodyWrapper>
                <Body>
                    <LeftSidebar/>
                    <Main>
                        {children}
                    </Main>
                    <RightSidebarWrapper>
                        {rightSidebar}
                    </RightSidebarWrapper>
                </Body>
            </BodyWrapper>
            {blogModalIsActive && <BlogModal active={blogModalIsActive}/>}
            <Push />
        </Container>
    )
}

export default MainLayout
