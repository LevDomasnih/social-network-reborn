import React, {FC, FormEvent, useEffect, useState} from "react";
import {ChatDialogProps} from "@/components/Dialogs/ChatDialog/ChatDialog.props";
import {Avatar, Button} from "@/components";
import styled from "styled-components";
import {useAppDispatch} from "@/store/hooks";
import {dialogsSendMessage} from "@/store/modules/dialogs/dialogsSlice";
import Message from "@/components/Dialogs/Message/Message";
import Link from "next/link";

const Container = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 0.25rem;
  border: 1px solid #E4E4E4;
  background: ${(props) => props.theme.colors.whiteGrey};
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
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  overflow: scroll;
`;

const TextArea = styled.textarea`
  height: 80px;
  width: 100%;
  resize: none;
  padding: 5px;
`;

const ChatHeader = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #E4E4E4;
  justify-content: space-between;
  align-items: center;
`;

const UserFullName = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize.lg};
  line-height: ${(props) => props.theme.lineHeight.lg};
`;

const ChatDialog: FC<ChatDialogProps> = ({activeDialog, currentUserId, ...props}) => {
    const [message, setMessage] = useState('')
    const dispatch = useAppDispatch()

    const messages = activeDialog?.messages
    const users = activeDialog?.users
    const info = activeDialog?.info

    const handleMessageChange = (event: FormEvent<HTMLTextAreaElement>) => {
        setMessage((event.target as HTMLTextAreaElement).value);
    };

    const handleSendMessage = () => {
        if (info && message) {
            dispatch(dialogsSendMessage({
                text: message,
                secondOwnerId: info.id
            }))
            setMessage('')
        }
    }

    useEffect(() => {
        return () => {
            setMessage('')
        }
    }, [info])

    return (
        <Container>
            {activeDialog && (
                <PickedChat>
                    {info && (
                        <ChatHeader>
                            <UserFullName>
                                {activeDialog.info.name}
                            </UserFullName>
                            <Link href={`/users/${info.id}`}>
                                <a>
                                    <Avatar img={activeDialog.info.image || '/avatar.png'} width={38} height={38}/>
                                </a>
                            </Link>
                        </ChatHeader>
                    )}
                    <ChatScreen>
                        {messages?.map(m => (
                            <Message
                                key={m.id}
                                text={m.text}
                                ownerId={m.ownerId}
                                createdAt={m.createdAt}
                                users={users}
                            />
                        ))}
                    </ChatScreen>
                    <ChatControl>
                        <TextArea
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                        <Button
                            onClick={handleSendMessage}
                        >
                            Отправить
                        </Button>
                    </ChatControl>
                </PickedChat>
            )}
            {!activeDialog && (
                <NotPickedChat>
                    Выберете чат или создайте диалог
                </NotPickedChat>
            )}
        </Container>
    )
}

export default ChatDialog
