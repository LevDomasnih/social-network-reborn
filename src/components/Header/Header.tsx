import React, {FC} from "react";
import {HeaderProps} from "./Header.props";
import {Avatar, Button as DefaultButton, Search as DefaultSearch, SvgImage} from "../index";
import {useAppDispatch} from "@/store/hooks"
import styled from "styled-components";
import {setBlogModalActive} from "@/store/modules/user/userSlice";
import {useGetBaseInfoQuery} from "@/generated/graphql";

const Button = styled(DefaultButton)`
  width: 134px;
`;

const Container = styled.header`
  height: 82px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 2px 2px 4px rgba(22, 22, 22, 0.09);
  width: 100%;
  padding: 0 80px;
`;

const Wrapper = styled.div`
  max-width: 1720px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  align-items: center;
  width: 920px;
  margin: 0 100px;
`;

const Search = styled(DefaultSearch)`
  width: 400px;
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: flex-end;
  width: 344px;

  div:nth-child(1) div {
    margin-right: 40px;
  }

  div:nth-child(2) svg {
    margin-right: 30px;
  }
`;

const SettingItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Header: FC<HeaderProps> = ({className, ...props}) => {
    const {data} = useGetBaseInfoQuery()
    const dispatch = useAppDispatch()

    const openModal = () => {
        dispatch(setBlogModalActive(true))
    }

    return (
        <Container {...props} className={className}>
            <Wrapper>
                <LogoWrapper>
                    <SvgImage svg='logo' color='#161616'/>
                </LogoWrapper>
                <SearchWrapper>
                    <Search placeholder='Поиск'/>
                    <Button onClick={openModal}>Создать</Button>
                </SearchWrapper>
                <SettingsWrapper>
                    <SettingItem>
                        <Avatar img={data?.baseInfo.avatar?.filePath || '/avatar.png'} width={50} height={50}/>
                    </SettingItem>
                    <SettingItem>
                        <SvgImage svg='mail' color='#161616'/>
                    </SettingItem>
                    <SettingItem>
                        <SvgImage svg='setting' color='#161616'/>
                    </SettingItem>
                </SettingsWrapper>
            </Wrapper>
        </Container>
    )
}
