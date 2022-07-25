import React, {FC} from "react";
import styled from "styled-components";
import {DialogsProps} from "@/components/Dialogs/Dialogs.props";
import UserDialog from "@/components/Dialogs/UserDialog/UserDialog";
import {Search, SvgImage} from "@/components";
import {useAppSelector} from "@/store/hooks";
import ChatDialog from "@/components/Dialogs/ChatDialog/ChatDialog";

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


const Dialogs: FC<DialogsProps> = (props) => {
    const {dialogs, activeDialog} = useAppSelector(state => state.dialogsSlice)
    const {id} = useAppSelector(state => state.authSlice)

    return (
        <DialogsContainer style={{height: 840}}>
            <DialogsMenu>
                <MenuOptions>
                    <Search placeholder='Поиск диалога'/>
                    <AddFriend/>
                </MenuOptions>
                <UserDialogs>
                    {dialogs.map((dialog) => <UserDialog key={dialog.id} {...dialog} />)}
                </UserDialogs>
            </DialogsMenu>
            <ChatDialog activeDialog={activeDialog} currentUserId={id}/>
        </DialogsContainer>
    )
}

export default Dialogs
