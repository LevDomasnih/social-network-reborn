import Image from "next/image";
import {SvgImage} from "../SvgImage/SvgImage";
import React, {ForwardedRef, forwardRef} from "react";
import {BackgroundImageProps} from "./BackgroundImage.props";
import cn from "classnames";
import styled from "styled-components"

const Input = styled.input`
  visibility: hidden;
  position: absolute;
`;

const EmptyImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #93c3e3;
`;

const ContainerSvg = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const GallerySvg = styled(SvgImage)`
  height: 40px;
  width: 40px;
`;

export const BackgroundImage = forwardRef(({onChange, isEdit, className, src, ...props}: BackgroundImageProps, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <div className={cn(className)} {...props}>
            {ref && <Input type='file' ref={ref} onChange={onChange}/>}
            {src ? (
                <Image src={src} layout='fill' objectFit='cover' objectPosition='center' />
            ) : (
                <EmptyImage>
                    <ContainerSvg>
                        <GallerySvg svg='gallery' color='#FFF' />
                    </ContainerSvg>
                </EmptyImage>
            )}
            {isEdit && (
                <ContainerSvg>
                    <GallerySvg svg='gallery' color='#FFF' />
                </ContainerSvg>
            )}
        </div>
    )
})
