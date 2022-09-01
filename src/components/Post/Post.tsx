import React, {FC} from "react"
import {PostProps} from "./Post.props";
import {BackgroundImage} from "../index"
import styled from "styled-components"
import {PostTop} from "./PostTop/PostTop";
import {PostBottom} from "./PostBottom/PostBottom";

const Container = styled.div`
  border-radius: 0.25rem;
  border: 1px solid #E4E4E4;
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
        images,
        likes,
        views,
        owner: {
            profile: {
                firstName,
                lastName,
                avatar
            },
        }
    } = props;

    return (
        <Container>
            <ContainerItem>
                <PostTop
                    firstName={firstName}
                    lastName={lastName}
                    avatar={avatar.filePath}
                    createdAt={createdAt}
                    text={text}
                />
            </ContainerItem>
            {images && <Background src={images?.filePath}/>}
            <ContainerItem>
                <PostBottom
                    id={id}
                    likes={likes?.length || 0}
                    views={views?.length || 0}
                    isLiked={false}
                />
            </ContainerItem>
        </Container>
    )
}
