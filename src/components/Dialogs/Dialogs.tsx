import React, {FC, useState} from "react";
import styled from "styled-components";
import {DialogsProps} from "@/components/Dialogs/Dialogs.props";
import UserDialog from "@/components/Dialogs/UserDialog/UserDialog";
import {Button, Search, SvgImage} from "@/components";

const DialogsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 20px;
  border-radius: 0.25rem;
`;

const DialogsMenu = styled.div`
  width: 320px;
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid #E4E4E4;
  overflow: hidden;
  padding-bottom: 59px;
`;

const DialogsChat = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid #E4E4E4;
  background: ${(props) => props.theme.colors.whiteGrey};
`;

const MenuOptions = styled.div`
  width: 100%;
  border-bottom: 1px solid #E4E4E4;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  padding: 10px 10px;
  background: ${(props) => props.theme.colors.whiteGrey};
`;

const UserDialogs = styled.div`
  overflow: scroll;
  height: 100%;
`;

const AddFriend = styled(props => <SvgImage svg='addFriend' color={'#000'} {...props}/>)`
  height: 38px;
  width: 38px;
  cursor: pointer;
`;

const NotPickedChat = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PickedChat = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ChatControl = styled.div`
  height: auto;
  width: 100%;
  padding: 10px 15px;
  border-top: 1px solid ${(props) => props.theme.colors.grey};
`;

const ChatScreen = styled.div`
  height: 100%;
  width: 100%;
`;

const TextArea = styled.textarea`
  height: 80px;
  width: 100%;
  resize: none;
  padding: 5px;
`;


const mockDialogs = [
    {
        isRead: false,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:07:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    },
    {
        isRead: true,
        messageTime: new Date('2022-07-10T15:06:29.496Z'),
        userName: 'Лев Домашних',
        lastMessage: 'Привет))'
    }

]

const Dialogs: FC<DialogsProps> = (props) => {
    const [isPickDialog, setIsPickDialog] = useState(false)

    // TODO ДОСТАВАТЬ ДАННЫЕ ИЗ СТОРА ДИАЛОГОВ 1) все диалоги 2) диалог с юзером [если он есть]

    return (
        <DialogsContainer style={{height: 840}}>
            <DialogsMenu>
                <MenuOptions>
                    <Search placeholder='Поиск диалога' />
                    <AddFriend />
                </MenuOptions>
                <UserDialogs>
                    {mockDialogs.map((dialog, index) => <UserDialog key={index} {...dialog} onClick={() => setIsPickDialog(true)} /> )}
                </UserDialogs>
            </DialogsMenu>
            <DialogsChat>
                {isPickDialog && (
                    <PickedChat>
                        <ChatScreen>

                        </ChatScreen>
                        <ChatControl>
                            <TextArea />
                            <Button>Отправить</Button>
                        </ChatControl>
                    </PickedChat>
                )}
                {!isPickDialog && (
                    <NotPickedChat>
                        Выберете чат или создайте диалог
                    </NotPickedChat>
                )}
            </DialogsChat>
        </DialogsContainer>
    )
}

export default Dialogs
