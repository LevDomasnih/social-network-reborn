import React, {FC} from "react";
import {RightSidebarInfoProps} from "./RightSidebarInfo.props";
import {SvgImage} from "../SvgImage/SvgImage";
import {HashTag} from "../HashTag/HashTag";
import {Avatar} from "../Avatar/Avatar";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;

  > * {
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const FillProfileWrapper = styled.div`
  background: ${(props) => props.theme.colors.purple};
  padding: 20px;
  border-radius: 3px;
`;

const MaybeInsertingWrapper = styled.div``;

const HashTagsWrapper = styled.div``;

const FillProfileTitleBold = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 700;
`;

const FillProfileTasks = styled.div`
  margin-top: 25px;

  > * {
    border-bottom-width: 1px;
    border-bottom-color: #8E86D5;

    &:last-child {
      border-bottom-width: 0;
    }
  }
`;

const FillProfileTask = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;

  &:last-child {
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
`;

const FillProfileTaskTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  color: ${(props) => props.theme.colors.white};
  font-weight: 700;
`;

const TitleAboveBlock = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  color: ${(props) => props.theme.colors.dark};
  font-weight: 500;
  margin-bottom: 25px;
`;

const MaybeInsertingUsers = styled.div`
  > * {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MaybeInsertingUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MaybeInsertingUser = styled.div`
  display: flex;

  > * {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const MaybeInsertingUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MaybeInsertingUserName = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;

const MaybeInsertingUserLogin = styled(MaybeInsertingUserName)`
  color: #AEAEAE;
`;

const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 9px;
`;

const HashTagStyled = styled(HashTag)`
  margin-right: 9px;
`;

export const RightSidebarInfo: FC<RightSidebarInfoProps> = ({className, ...props}) => {
    const tags = [
        'Вирус',
        'Программирование',
        'Figma',
        'Продуктивность',
        'Тайм-менеджмент'
    ]

    return (
        <Container className={className}>
            <FillProfileWrapper>
                <FillProfileTitleBold>Заполните свой профиль</FillProfileTitleBold>
                <FillProfileTasks>
                    <FillProfileTask>
                        <FillProfileTaskTitle>Добавить фото профиля</FillProfileTaskTitle>
                        <SvgImage svg='arrow' color='white'/>
                    </FillProfileTask>
                    <FillProfileTask>
                        <FillProfileTaskTitle>Добавить фон профиля</FillProfileTaskTitle>
                        <SvgImage svg='arrow' color='white'/>
                    </FillProfileTask>
                    <FillProfileTask>
                        <FillProfileTaskTitle>Изменение доступности</FillProfileTaskTitle>
                        <SvgImage svg='arrow' color='white'/>
                    </FillProfileTask>
                    <FillProfileTask>
                        <FillProfileTaskTitle>Создайте первый проект</FillProfileTaskTitle>
                        <SvgImage svg='arrow' color='white'/>
                    </FillProfileTask>
                </FillProfileTasks>
            </FillProfileWrapper>
            <MaybeInsertingWrapper>
                <TitleAboveBlock>Может быть интересно</TitleAboveBlock>
                <MaybeInsertingUsers>
                    <MaybeInsertingUserWrapper>
                        <MaybeInsertingUser>
                            <Avatar img='/avatar.png' width={40} height={40}/>
                            <MaybeInsertingUserInfo>
                                <MaybeInsertingUserName>Сергеев Матвей</MaybeInsertingUserName>
                                <MaybeInsertingUserLogin>@matveyserg</MaybeInsertingUserLogin>
                            </MaybeInsertingUserInfo>
                        </MaybeInsertingUser>
                        <SvgImage svg='addFriend' color='#161616'/>
                    </MaybeInsertingUserWrapper>
                    <MaybeInsertingUserWrapper>
                        <MaybeInsertingUser>
                            <Avatar img='/avatar.png' width={40} height={40}/>
                            <MaybeInsertingUserInfo>
                                <MaybeInsertingUserName>Сергеев Матвей</MaybeInsertingUserName>
                                <MaybeInsertingUserLogin>@matveyserg</MaybeInsertingUserLogin>
                            </MaybeInsertingUserInfo>
                        </MaybeInsertingUser>
                        <SvgImage svg='addFriend' color='#161616'/>
                    </MaybeInsertingUserWrapper>
                    <MaybeInsertingUserWrapper>
                        <MaybeInsertingUser>
                            <Avatar img='/avatar.png' width={40} height={40}/>
                            <MaybeInsertingUserInfo>
                                <MaybeInsertingUserName>Сергеев Матвей</MaybeInsertingUserName>
                                <MaybeInsertingUserLogin>@matveyserg</MaybeInsertingUserLogin>
                            </MaybeInsertingUserInfo>
                        </MaybeInsertingUser>
                        <SvgImage svg='addFriend' color='#161616'/>
                    </MaybeInsertingUserWrapper>
                </MaybeInsertingUsers>
            </MaybeInsertingWrapper>
            <HashTagsWrapper>
                <TitleAboveBlock>Популярные хештэги</TitleAboveBlock>
                <HashTags>
                    {tags.map(e => (
                        <HashTagStyled key={e}>#{e}</HashTagStyled>
                    ))}
                </HashTags>
            </HashTagsWrapper>
        </Container>
    )
}
