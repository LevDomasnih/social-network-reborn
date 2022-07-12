import styled from "styled-components";
import {Avatar} from "@/components";
import {FC} from "react";
import {UserDialogProps} from "./UserDialog.props";
import {format} from "date-fns";

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

const UserDialog: FC<UserDialogProps> = (props) => {
    const {
        userName,
        lastMessage,
        isRead,
        messageTime,
        onClick,
        ...otherProps
    } = props

    return (
        <Container {...otherProps} onClick={onClick}>
            <Avatar img={'/avatar.png'} width={50} height={50}/>
            <Info>
                <TopInfo>
                    <UserFullName>
                        {userName}
                    </UserFullName>
                    <MessageTime>
                        {format(new Date(messageTime), 'HH:mm')}
                    </MessageTime>
                </TopInfo>
                <BottomInfo>
                    <LastMessage>
                        {lastMessage}
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
