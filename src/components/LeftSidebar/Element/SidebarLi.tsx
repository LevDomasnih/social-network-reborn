import {FC, useState} from "react";
import Link from "next/link";
import {SidebarLiProps} from "./SidebarLi.props";
import {SvgImage} from "../../index";
import styled from "styled-components";

const Container = styled.li``;

const LinkHref = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

const LinkImage = styled(SvgImage)`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

const LinkText = styled.span<{ active: boolean }>`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 500;
  padding-left: 16px;
  color: ${(props) => props.active ? props.theme.colors.dark : props.theme.colors.grey};
`;

export const SidebarLi: FC<SidebarLiProps> = ({name, router, route}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <Container>
            <Link href={route}>
                <LinkHref
                    onMouseOver={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <LinkImage svg='user' color={isHover || router.route?.includes(route) ? '#161616' : '#B7B7B7'}/>
                    <LinkText active={router.route?.includes(route) || isHover}>{name}</LinkText>
                </LinkHref>
            </Link>
        </Container>
    )
}
