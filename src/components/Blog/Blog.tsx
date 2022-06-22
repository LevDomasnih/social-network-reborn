import React, {FC} from "react"
import {BlogProps} from "./Blog.props";
import {BackgroundImage} from "../index"
import {convertFromRaw, EditorState, RawDraftContentBlock} from "draft-js"
import styled from "styled-components"
import {BlogTop} from "./BlogTop/BlogTop";
import {BlogBottom} from "./BlogBottom/BlogBottom";

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

export const Blog: FC<BlogProps> = (props) => {
    const {
        textBlocks,
        createdAt,
        mainImage,
        likes,
        views,
        profile: {
            firstName,
            lastName,
            middleName,
            avatar
        },
    } = props;

    const editor = EditorState.createWithContent(convertFromRaw({
        blocks: textBlocks as RawDraftContentBlock[],
        entityMap: props.entityMap
    }))
    return (
        <Container>
            <ContainerItem>
                <BlogTop
                    firstName={firstName}
                    lastName={lastName}
                    avatar={avatar}
                    createdAt={createdAt}
                    editor={editor}
                />
            </ContainerItem>
            <Background src={mainImage}/>
            <ContainerItem>
                <BlogBottom likes={likes} views={views}/>
            </ContainerItem>
        </Container>
    )
}
