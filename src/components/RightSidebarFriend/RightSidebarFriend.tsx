import React, {FC} from "react";
import {RightSidebarFriendProps} from "./RightSidebarFriend.props";
import {Avatar, HashTag, SvgImage} from "../../components";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;

  > * {
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  height: 126px;
  background: ${(props) => props.theme.colors.whiteGrey};
  padding: 0 62px;
`;

const InfoItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 6px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoItemValue = styled.div`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  line-height: ${(props) => props.theme.lineHeight["3xl"]};
  font-weight: 500;
`;

const InfoItemTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark}
`;

const TitleValue = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: 24px;
  font-weight: 500;
  color: #AEAEAE;
  margin-left: 10px;
`;

const UsersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 25px;
`;

const User = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const UserName = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark}
`;

const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 9px;
`;

const HashTagStyled = styled(HashTag)`
  margin-right: 9px;
`;

export const RightSidebarFriend: FC<RightSidebarFriendProps> = ({className, ...props}) => {
    const friend = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]

    const tags = [
        'Вирус',
        'Программирование',
        'Figma',
        'Продуктивность',
        'Тайм-менеджмент'
    ]

    return (
        <Container className={className}>
            <Info>
                <InfoItemWrapper>
                    <InfoItem>
                        <SvgImage svg='like' color='#161616'/>
                        <InfoItemValue>2.6K</InfoItemValue>
                        <InfoItemTitle>лайков</InfoItemTitle>
                    </InfoItem>
                </InfoItemWrapper>
                <InfoItemWrapper>
                    <InfoItem>
                        <SvgImage svg='eye' color='#161616'/>
                        <InfoItemValue>10K</InfoItemValue>
                        <InfoItemTitle>просмотров</InfoItemTitle>
                    </InfoItem>
                </InfoItemWrapper>
            </Info>
            <div>
                <TitleWrapper>
                    <Title>Подписчики</Title>
                    <TitleValue>10.2K</TitleValue>
                </TitleWrapper>
                <UsersWrapper>
                    {friend.map(e => (
                        <User href='' key={e}>
                            <Avatar img='/avatar.png' width={56} height={56}/>
                            <UserName>Емельянова Любовь</UserName>
                        </User>
                    ))}
                </UsersWrapper>
            </div>
            <div>
                <TitleWrapper>
                    <Title>Подписки</Title>
                    <TitleValue>200</TitleValue>
                </TitleWrapper>
                <UsersWrapper>
                    {friend.map(e => (
                        <User onClick={() => {
                        }} key={e}>
                            <Avatar img='/avatar.png' width={56} height={56}/>
                            <UserName>Емельянова Любовь</UserName>
                        </User>
                    ))}
                </UsersWrapper>
            </div>
            <div>
                <TitleWrapper>
                    <Title>Популярные хештэги</Title>
                </TitleWrapper>
                <HashTags>
                    {tags.map(e => (
                        <HashTagStyled key={e}>#{e}</HashTagStyled>
                    ))}
                </HashTags>
            </div>
        </Container>
    )
}
