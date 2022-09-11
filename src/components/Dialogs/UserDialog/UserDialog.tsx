import styled from "styled-components";
import {Avatar} from "@/components";
import {FC} from "react";
import {UserDialogProps} from "./UserDialog.props";
import {format} from "date-fns";
import {useRouter} from "next/router";
import {useAppSelector} from "@/store/hooks";
import {useGetBaseInfoQuery, useGetDialogQuery} from "@/generated/graphql";

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  padding: 10px 10px;
  border-bottom: 1px solid #E4E4E4;
  background: ${(props) => props.isActive ? props.theme.colors.violet : props.theme.colors.whiteGrey};
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

const UserDialog: FC<UserDialogProps> = (props) => {
    const {
        id,
        status,
        lastMessage,
        info,
        ...otherProps
    } = props;

    const router = useRouter()

    const {userId} = router.query

    const baseInfoQuery = useGetBaseInfoQuery()
    const dialog = useGetDialogQuery({variables: {id: userId?.[0]}})

    const isRead = true // FIXME mock

    const handleClick = () => {
        router.push(`/dialogs/${info.id}`)
    }

    return (
        <Container {...otherProps} onClick={handleClick} isActive={dialog.data?.dialog.id === id}>
            <Avatar img={info.image?.filePath || '/avatar.png'} width={50} height={50}/>
            <Info>
                <TopInfo>
                    <UserFullName>
                        {info.name}
                    </UserFullName>
                    <MessageTime>
                        {lastMessage?.createdAt && format(new Date(lastMessage.createdAt), 'HH:mm')}
                    </MessageTime>
                </TopInfo>
                <BottomInfo>
                    <LastMessage>
                        <WhoSend>
                            {lastMessage?.owner.id === baseInfoQuery.data?.baseInfo.id ? 'Вы' : lastMessage?.owner.profile.firstName}:
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
