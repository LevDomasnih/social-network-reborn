import React, {FC, useEffect, useState} from "react";
import {PushProps} from "@/components/Push/Push.props";
import styled, {css, keyframes} from "styled-components";
import {Avatar} from "@/components";
import Notification from "@/components/Notification/Notification";
import {AiOutlineClose} from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {deleteMessagePushById, deleteMessagePushByUserId} from "@/store/modules/dialogs/dialogsSlice";
import {useRouter} from "next/router";
import {format} from "date-fns";

const breatheAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const Container = styled.a<{ fadeOut?: boolean }>`
  background: rgba(54, 56, 59, .96);
  border-radius: 0.5rem;
  width: 350px;
  display: block;

  ${(props) => {
    if (props.fadeOut) {
      return css`
        animation-name: ${breatheAnimation};
        animation-duration: 3s;
        animation-iteration-count: initial;
      `;
    }
  }}
`;

const PushHead = styled.div`
  padding: 10px 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

const HeadLeft = styled.div`

`;

const HeadRight = styled.div`
  display: flex;
`;

const UserName = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TimeCreated = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};

  margin-right: 5px;
`;

const PushBody = styled.div`
  padding: 11px 12px 12px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  column-gap: 10px;
`;

const BodyAvatar = styled.div`
  cursor: pointer;

`;

const BodyText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  height: 80px;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: calc(${(props) => props.theme.lineHeight.base} * 3);
  overflow-wrap: break-word;
`;

const CloseButton = styled.button`
  cursor: pointer;
`;

const Push: FC<PushProps> = () => {
    const router = useRouter()

    const [mounted, setMounted] = useState(false)
    const [hoveredPush, setHoveredPush] = useState<null | string>(null)

    const {messagesPush} = useAppSelector(state => state.dialogsSlice)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (messagesPush.length) {
            setMounted(true)
        } else {
            setMounted(false)
        }
    }, [messagesPush])

    const deleteMessagePush = (id: string) => {
        dispatch(deleteMessagePushById(id))
    }

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, messageId: string, userId: string) => {
        event.stopPropagation()
        dispatch(deleteMessagePushByUserId(userId))
        router.push(`/dialogs/${userId}`)
    }

    const handleUserClick = (event: React.MouseEvent<HTMLDivElement>, userId: string) => {
        event.stopPropagation()
        router.push(`/users/${userId}`)
    }

    return (
        <Notification
            mounted={mounted}
            setMounted={setMounted}
            selector='push-portal'
            position='left-bottom'

        >
            {messagesPush.map((message, index) => (
                <Container
                    key={message.id}
                    onClick={(event) => handleClick(event, message.id, message.user.id)}
                    onMouseEnter={() => setHoveredPush(message.id)}
                    onMouseLeave={() => setHoveredPush(null)}
                    onAnimationEnd={() => deleteMessagePush(message.id)}
                    fadeOut={hoveredPush ? messagesPush.findIndex(message => message.id === hoveredPush) > index : true}
                >
                    <PushHead>
                        <HeadLeft>
                            <UserName
                                onClick={(event) => handleUserClick(event, message.user.id)}
                            >
                                {message.user.firstName} {message.user.lastName}
                            </UserName>
                        </HeadLeft>
                        <HeadRight>
                            <TimeCreated>
                                {message?.createdAt && format(new Date(message.createdAt), 'HH:mm')}                            </TimeCreated>
                            <CloseButton
                                onClick={() => deleteMessagePush(message.id)}
                            >
                                <AiOutlineClose style={{fill: '#FFF'}}/>
                            </CloseButton>
                        </HeadRight>
                    </PushHead>
                    <PushBody>
                        <BodyAvatar
                            onClick={(event) => handleUserClick(event, message.user.id)}
                        >
                            <Avatar img={message.user.avatar || '/avatar.png'} width={50} height={50}/>
                        </BodyAvatar>
                        <BodyText>
                            {message.text}
                        </BodyText>
                    </PushBody>
                </Container>
            ))}
        </Notification>
    )
}

export default Push;
