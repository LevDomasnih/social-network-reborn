import React, {FC} from "react"
import {PostProps} from "./Post.props";
import {BackgroundImage} from "../index"
import {convertFromRaw, EditorState, RawDraftContentBlock} from "draft-js"
import styled from "styled-components"
import {PostTop} from "./PostTop/PostTop";
import {PostBottom} from "./PostBottom/PostBottom";

const Container = styled.div`
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #E4E4E4;
`;

const ContainerItem = styled.div`
  padding: 20px;
`;


const Background = styled(props => <BackgroundImage {...props} />)`
  width: 100%;
  height: 270px;
  position: relative;
`;

export const Post: FC<PostProps> = (props) => {
    const {
        id,
        text,
        createdAt,
        mainImage,
        likes,
        views,
        isLiked,
        profile: {
            firstName,
            lastName,
            middleName,
            avatar
        },
    } = props;

    const userText = typeof text === 'string'
        ? text
        : EditorState.createWithContent(convertFromRaw({
            blocks: text as RawDraftContentBlock[],
            entityMap: props.entityMap || {}
        }))
    return (
        <Container>
            <ContainerItem>
                <PostTop
                    firstName={firstName}
                    lastName={lastName}
                    avatar={avatar}
                    createdAt={createdAt}
                    text={userText}
                />
            </ContainerItem>
            {mainImage && <Background src={mainImage}/>}
            <ContainerItem>
                <PostBottom
                    id={id}
                    likes={likes}
                    views={views}
                    isLiked={isLiked}
                />
            </ContainerItem>
        </Container>
    )
}
