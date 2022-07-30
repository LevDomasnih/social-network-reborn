import {SvgImage} from "../SvgImage/SvgImage";
import React, {FC} from "react";
import {StoryProps} from "./Story.props";
import {Avatar} from "../Avatar/Avatar";
import Image from "next/image";
import styled, {css} from "styled-components";

const Container = styled.div<{ isVideo?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 33px;

  ${(props) => {
    if (props.isVideo) {
      return css`
        margin-right: 23px;
      `;
    }
  }}
`;

const StoryWrapper = styled.div<{ isDefault: boolean }>`
  display: flex;
  position: relative;
  align-items: center;

  ${(props) => {
    if (props.isDefault) {
      return css`
        justify-content: center;
        width: 54px;
      `;
    }
  }}
`;

const RoundedWrapper = styled.div<{ isAvatar: boolean }>`
  display: flex;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background: ${(props) => props.theme.colors.purple};
  width: 46px;
  height: 46px;

  ${(props) => {
    if (props.isAvatar) {
      return css`
        border: 1.5px solid #6962A8;
        background: #FFFFFF;
      `;
    }
  }}
`;

const VideoRoundedWrapper = styled.div`
  position: absolute;
  border-radius: 9999px;
  width: 38px;
  height: 38px;
  overflow: hidden;
`;

const VideoRounded = styled.div`
  position: relative;
  width: 38px;
  height: 38px;
  background: rgba(0, 0, 0, 0.18);
`;

const RoundedImage = styled(SvgImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const VideoWrapper = styled.div`
  position: relative;
  height: 38px;
  width: 87px;
`;

const VideoParent = styled.div`
  position: absolute;
  right: 0;
`;

const Video = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.125rem;
  width: 100px;
  height: 38px;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const TextParent = styled.div<{ isDefault: boolean }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 46px;

  ${(props) => {
    if (props.isDefault) {
      return css`
        justify-content: center;
        width: 54px;
      `;
    }
  }}
`;

const Text = styled.div`
  position: absolute;
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.lineHeight.sm};
  top: 6px;
  color: ${(props) => props.theme.colors.dark};

`;

export const Story: FC<StoryProps> = ({className, avatar, author, isVideo, ...props}) => {
    return (
        <Container
            isVideo={isVideo}
            className={className}
        >
            <StoryWrapper isDefault={!isVideo && !avatar}>
                <RoundedWrapper isAvatar={!!avatar}>
                    {isVideo ? (
                        <>
                            <Avatar img='/meBg.png' width={38} height={38}/>
                            <VideoRoundedWrapper>
                                <VideoRounded>
                                    <RoundedImage svg='play' color='#FFF'/>
                                </VideoRounded>
                            </VideoRoundedWrapper>
                        </>
                    ) : (
                        avatar ? <Avatar img={avatar} width={38} height={38}/> : (
                            <RoundedImage svg='plus' color='#FFF'/>
                        )
                    )}
                </RoundedWrapper>
                {isVideo && (
                    <VideoWrapper>
                        <VideoParent>
                            <Video>
                                <Image src='/meBg.png' layout='fill' objectFit='cover'/>
                            </Video>
                        </VideoParent>
                    </VideoWrapper>
                )}
                <TextWrapper>
                    <TextParent isDefault={!isVideo && !avatar}>
                        <Text>{author ?? 'Добавить'}</Text>
                    </TextParent>
                </TextWrapper>
            </StoryWrapper>
        </Container>
    )
}
