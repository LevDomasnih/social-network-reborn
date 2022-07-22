import React, {FC, FormEvent, useEffect, useState} from "react";
import {ChatDialogProps} from "@/components/Dialogs/ChatDialog/ChatDialog.props";
import {Avatar, Button} from "@/components";
import styled from "styled-components";
import {format} from "date-fns";
import {useAppDispatch} from "@/store/hooks";
import {sendMessage} from "@/store/modules/dialogs/dialogsThunk";
import {dialogsSendMessage, dialogsSubscribe} from "@/store/modules/dialogs/dialogsSlice";

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

const MessageWrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const MessageText = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
`;

const MessageTime = styled.span`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
`;

const MessageUserName = styled.div`
`;

const MessageInfoBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const MessageBlock = styled.div`
  margin-left: 15px;
`;

const ChatDialog: FC<ChatDialogProps> = ({activeDialog, currentUserId, ...props}) => {
    const [message, setMessage] = useState('')
    const dispatch = useAppDispatch()

    const messages = activeDialog?.messages
    const users = activeDialog?.users
    const user = activeDialog?.user

    const handleMessageChange = (event: FormEvent<HTMLTextAreaElement>) => {
        setMessage((event.target as HTMLTextAreaElement).value);
    };

    const handleSendMessage = () => {
        if (user && message) {
            dispatch(dialogsSendMessage({
                text: message,
                secondOwnerId: user.id
            }))
            setMessage('')
        }
    }

    useEffect(() => {
        return () => {
            setMessage('')
        }
    }, [user])

    return (
        <Container>
            {activeDialog && (
                <PickedChat>
                    <ChatHeader>
                        <UserFullName>
                            {activeDialog.user.firstName} {activeDialog.user.lastName}
                        </UserFullName>
                        <Avatar img={activeDialog.user.avatar || '/avatar.png'} width={38} height={38} />
                    </ChatHeader>
                    <ChatScreen>
                        {messages?.map(m => (
                            <MessageWrapper key={m.id}>
                                <Avatar img={users?.find(u => u.id === m.ownerId)?.avatar || '/avatar.png'} width={50} height={50} />
                                <MessageBlock>
                                    <MessageInfoBlock>
                                        <MessageUserName>
                                            {users?.find(u => u.id === m.ownerId)?.firstName}
                                        </MessageUserName>
                                        <MessageTime>
                                            {format(new Date(m.createdAt), 'HH:mm')}
                                        </MessageTime>
                                    </MessageInfoBlock>
                                    <MessageText>
                                        {m.text}
                                    </MessageText>
                                </MessageBlock>
                            </MessageWrapper>
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
