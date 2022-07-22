import styled from "styled-components";
import {Avatar} from "@/components";
import {FC, useEffect, useState} from "react";
import {UserDialogProps} from "./UserDialog.props";
import {format} from "date-fns";
import {useRouter} from "next/router";
import {useAppSelector} from "@/store/hooks";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid #E4E4E4;
  background: ${(props) => props.theme.colors.whiteGrey};
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 15px;
  justify-content: space-around;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserFullName = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
`;

const MessageTime = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
`;

const BottomInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LastMessage = styled.div`
  color: ${(props) => props.theme.colors.dark};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
`;

const Options = styled.div`

`;

const NotReadOption = styled.div`
  height: 7px;
  width: 7px;
  background: ${(props) => props.theme.colors.purple};
  border-radius: 50%;
`;

const WhoSend = styled.span`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  margin-right: 3px;
`;

type userDataType = {
    lastName: string | null,
    messageTime: Date | null,
    avatar: string | null,
    currentUserSend: boolean,
    firstName: string | null
}

const UserDialog: FC<UserDialogProps> = (props) => {
    const {
        id,
        status,
        lastMessage,
        users,
        userId,
        ...otherProps
    } = props;

    const authId = useAppSelector(state => state.authSlice.id)

    const router = useRouter()

    const [userData, setUserData] = useState<userDataType>({
        firstName: null,
        lastName: null,
        messageTime: null,
        avatar: null,
        currentUserSend: false
    })

    useEffect(() => {
        const userLast = users.find(u => u.id === lastMessage?.ownerId)
        const currentUser = users.find(u => u.id === userId)
        if (userLast && currentUser) {
            setUserData(prev => ({
                ...prev,
                avatar: currentUser.avatar,
                messageTime: lastMessage?.createdAt,
                firstName: currentUser?.firstName,
                lastName: currentUser.lastName,
                currentUserSend: lastMessage?.ownerId === authId
            }))
        }
    }, [userId, users, authId, lastMessage?.ownerId, lastMessage?.createdAt])

    const isRead = true // FIXME mock

    const handleClick = () => {
        router.push(`/dialogs/${userId}`)
    }

    return (
        <Container {...otherProps} onClick={handleClick}>
            <Avatar img={userData.avatar || '/avatar.png'} width={50} height={50}/>
            <Info>
                <TopInfo>
                    <UserFullName>
                        {userData.firstName} {userData.lastName}
                    </UserFullName>
                    <MessageTime>
                        {userData.messageTime && format(new Date(userData.messageTime), 'HH:mm')}
                    </MessageTime>
                </TopInfo>
                <BottomInfo>
                    <LastMessage>
                        <WhoSend>
                            {userData.currentUserSend ? 'Вы' : userData.firstName}:
                        </WhoSend>
                        {lastMessage?.text}
                    </LastMessage>
                    <Options>
                        {!isRead && <NotReadOption/>}
                    </Options>
                </BottomInfo>
            </Info>
        </Container>
    )
}

export default UserDialog
