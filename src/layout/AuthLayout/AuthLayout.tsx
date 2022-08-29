import React, {FC, useEffect} from "react";
import {AuthLayoutProps} from "./AuthLayout.props";
import {useAppSelector} from "../../store/hooks";
import {useRouter} from 'next/router'
import routes from "../../utils/routes";
import {Htag} from "../../components";
import styled from "styled-components";
import Cookies from "js-cookie";

//TODO обработка ошибок

// const openNotification = (error: string) => {
//     notification.open({
//         message: 'Ошибка',
//         description: error
//     });
// };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const LeftContainer = styled.div`
  height: 100%;
  flex-basis: 40%;
  background: #F3F3F3;
`;

const RightContainer = styled.div`
  flex-basis: 60%;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const RightForm = styled.div`
  width: 480px;
`;

const AuthLayout: FC<AuthLayoutProps> = ({className, children, head, ...props}) => {

    const router = useRouter()

    const token = Cookies.get('jwt')

    useEffect(() => {
        if (token) {
            router.push(routes.me)
        }
    }, [token, router])

    return (
        <Container className={className}>
            <LeftContainer>
            </LeftContainer>
            <RightContainer>
                <RightWrapper>
                    <RightForm>
                        <Htag tag={"h1"}>{head}</Htag>
                        {children}
                    </RightForm>
                </RightWrapper>
            </RightContainer>
        </Container>
    )
}

export default AuthLayout
