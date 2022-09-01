import React, {FC} from "react";
import {MessageProps} from "@/components/Dialogs/Message/Message.props";
import {Avatar} from "@/components";
import {format} from "date-fns";
import styled from "styled-components";
import Link from "next/link";

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

const Message: FC<MessageProps> = React.memo((props) => {
    const {
        text,
        owner,
        createdAt
    } = props;

    return (
        <MessageWrapper>
            <Link href={`/users/${owner.id}`}>
                <a>
                    <Avatar
                        img={owner.profile.avatar?.filePath || '/avatar.png'}
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
            <MessageBlock>
                <MessageInfoBlock>
                    <MessageUserName>
                        {owner.profile.firstName}
                    </MessageUserName>
                    <MessageTime>
                        {format(new Date(createdAt), 'HH:mm')}
                    </MessageTime>
                </MessageInfoBlock>
                <MessageText>
                    {text}
                </MessageText>
            </MessageBlock>
        </MessageWrapper>
    )
})

export default Message;
