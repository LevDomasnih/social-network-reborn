import {FC} from "react";
import {LeftSidebarProps} from "./LeftSidebar.props";
import {useRouter} from "next/router";
import {SidebarLi} from "../index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  margin-top: 40px;
`;

const SidebarUl = styled.ul`
  > * {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LeftSidebar: FC<LeftSidebarProps> = ({className, ...props}) => {

    const router = useRouter()

    const temp = [
        {route: '/me', name: 'Мой профиль', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/articles', name: 'Статьи', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/inspiration', name: 'Вдохновение', img: '/svg/user.svg', height: 15, width: 15},
        {route: '/tutorial', name: 'Туториалы', img: '/svg/user.svg', height: 15, width: 15},
    ]
    return (
        <Container>
            <SidebarUl>
                {temp.map(element => (
                    <SidebarLi
                        key={element.route}
                        route={element.route}
                        name={element.name}
                        router={router}
                    />
                ))}
            </SidebarUl>
        </Container>
    )
}



