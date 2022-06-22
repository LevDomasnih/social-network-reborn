import React, {FC} from "react";
import {Avatar} from "../../Avatar/Avatar";
import {theme} from "../../../shared/theme";
import {format} from "date-fns";
import {SvgImage} from "../../SvgImage/SvgImage";
import {RichEditor} from "../../RichEditor/RichEditor";
import styled from "styled-components";
import {BlogTopProps} from "./BlogTop.props";

const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  > * {
    margin-right: 7px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const InfoText = styled.div<{ color?: string }>`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  color: ${(props) => props.color || props.theme.colors.dark};
`;

export const BlogTop: FC<BlogTopProps> = ({avatar, firstName, lastName, createdAt, editor}) => {
    return (
        <>
            <ContainerInfo>
                <Info>
                    <InfoItem>
                        {/*TODO должна быть пнг или загружаемая свг*/}
                        {/*<SvgImage svg={icon as svgNames} color='#4EB000'/>*/}
                        <InfoText color='#4EB000'>
                            {'theme'}
                        </InfoText>
                    </InfoItem>
                    <InfoItem>
                        {avatar && <Avatar img={avatar} width={22} height={22}/>}
                        <InfoText>
                            {`${firstName} ${lastName}`}
                        </InfoText>
                    </InfoItem>
                    <InfoText color={theme.colors.grey}>
                        {format(new Date(createdAt), 'HH:mm').toString()}
                    </InfoText>
                </Info>
                <SvgImage svg='save' color='#161616'/>
            </ContainerInfo>
            <RichEditor editorState={editor} readonly={true}/>
        </>
    )
}
