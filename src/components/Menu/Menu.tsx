import {IMenuItem, MenuProps} from "./Menu.props"
import React, {FC, useState} from "react"
import {Avatar, Button as DefaultButton} from "../index"
import {Tag} from "../Tag/Tag"
import {IBlog} from "../../models/IBlog"
import {useAppDispatch, useAppSelector} from "../../store/hooks"
import {IPost} from "../../models/IPost"
import styled, {css} from "styled-components";
import {setBlogModalActive} from "../../store/modules/user/userSlice";
import {createPost} from "../../store/modules/user/userThunk";

const Button = styled(DefaultButton)`
  width: 134px;
`;

const Container = styled.div`
  position: relative;

  > * {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MenuTitles = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 21px;
  border-bottom: 1px solid #E4E4E4;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
`;

const MenuLink = styled.a<{ active: boolean }>`
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 500;
  cursor: pointer;
  color: #E4E4E4;

  &:hover {
    color: ${(props) => props.theme.colors.dark};
  }

  ${(props) => {
    if (props.active) {
      return css`
        color: #161616;
        position: relative;

        &:before {
          content: '';
          width: 100%;
          height: 2px;
          background: #6962A8;
          position: absolute;
          bottom: -22px;
        }
      `;
    }
  }}
`;

const MenuDivider = styled.div`
  width: 1px;
  height: 12px;
  background: #E4E4E4;
  margin: 0 25px;
`;

const TagsWrapper = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
  font-weight: 400;
  flex-direction: column;
  padding: 0 10px;

  > * {
    margin-bottom: 30px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TagsText = styled.div``;

const Tags = styled.div`
  > * {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MenuCreate = styled.div`
  border-radius: 0.25rem;
  padding: 20px;
  border: 1px solid #E4E4E4;
`;

const MenuCreateTextarea = styled.textarea`
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.theme.colors.dark};
  width: 100%;
  border-radius: 0.5rem;
  border-width: 1px;
  resize: none;
`;

const MenuCreateTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const MenuCreateAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  > * {
    margin-right: 7px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const MenuCreateUsername = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
`;

const MenuCreateButtons = styled.div`
  > * {
    margin-right: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
// TODO Сделать меню общим
export const Menu: FC<MenuProps> = ({isTag, className, menuItems, ...props}) => {
    const [activeMenu, setActiveMenu] = useState(0)
    const [postValue, setPostValue] = useState("")

    const dispatch = useAppDispatch()

    const {avatar, firstName, lastName} = useAppSelector(state => state.userSlice.profile)
    const {id} = useAppSelector(state => state.authSlice)

    const items = (menuItems: IMenuItem<IBlog | IPost>[]) => {
        const activeItem = menuItems.find((item, i) => i === activeMenu)
        if (!activeItem) {
            return <></>
        }
        const Component = activeItem.component
        return activeItem.data.map(el => {
            return <Component key={el.id} {...el} />
        })
    }

    const handleChangeTab = (index: number, onSelect: (...data: any) => void) => {
        setActiveMenu(index)
        onSelect()
    }

    const openBlogModal = () => {
        dispatch(setBlogModalActive(true))
    }

    const handleCreatePost = () => {
        let data = new FormData()
        data.append("text", postValue)
        dispatch(createPost({formData: data, userId: id}))
        setPostValue("")
    }

    return (
        <Container>
            <MenuTitles>
                {menuItems.map((e, i, arr) => (
                    <MenuTitle key={e.name}>
                        <MenuLink onClick={() => handleChangeTab(i, e.onSelect)} active={i === activeMenu}>
                            {e.name}
                        </MenuLink>
                        {arr.length - 1 !== i && <MenuDivider/>}
                    </MenuTitle>
                ))}
            </MenuTitles>
            {isTag && (
                <TagsWrapper>
                    <TagsText>Статьи авторов, которые вам могут понравиться</TagsText>
                    <Tags>
                        <Tag active={true}>Все</Tag>
                        <Tag>UX / UI</Tag>
                        <Tag>Бизнес</Tag>
                        <Tag>Разработка</Tag>
                        <Tag>Музыка</Tag>
                        <Tag>Здоровье</Tag>
                    </Tags>
                </TagsWrapper>
            )}
            <MenuCreate>
                <MenuCreateTop>
                    <MenuCreateAvatarWrapper>
                        {avatar && <Avatar img={avatar} width={22} height={22}/>}
                        <MenuCreateUsername>
                            {`${firstName} ${lastName}`}
                        </MenuCreateUsername>
                    </MenuCreateAvatarWrapper>
                    <MenuCreateButtons>
                        <Button color="light" onClick={openBlogModal}>Написать блог</Button>
                        <Button onClick={handleCreatePost}>Создать пост</Button>
                    </MenuCreateButtons>
                </MenuCreateTop>
                <MenuCreateTextarea
                    rows={4}
                    placeholder="Что нового?"
                    value={postValue}
                    onChange={(e) => setPostValue(e.target.value)}
                />
            </MenuCreate>
            {menuItems && items(menuItems)}
        </Container>
    )
}
