import React, {FC} from "react";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import styled, {css} from "styled-components";
import {NotificationProps} from "@/components/Notification/Notification.props";

const Container = styled.div<{position?: 'left-top' | 'right-top' | 'right-bottom' | 'left-bottom'}>`
  z-index: 20;
  position: fixed;
  > * {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${(props) => {
      if (props.position === 'left-bottom' || !props.position) {
          return css`
            bottom: 0;
            left: 0;
            margin: 0 0 10px 10px;
          `;
      }
      if (props.position === 'right-top') {
          return css`
            top: 0;
            right: 0;
            margin: 10px 10px 0 0;
          `;
      }
      if (props.position === 'right-bottom') {
          return css`
            right: 0;
            bottom: 0;
            margin: 0 10px 10px 0;
          `;
      }
      if (props.position === 'left-top') {
          return css`
            top: 0;
            left: 0;
            margin: 10px 0 0 10px;
          `;
      }
  }}
`;

const Notification: FC<NotificationProps> = (props) => {
    const {
        position,
        children,
        selector,
        mounted,
        setMounted,
        ...otherProps
    } = props

    return (
        <ClientOnlyPortal
            selector={selector}
            mounted={mounted}
            setMounted={setMounted}
            {...otherProps}
        >
            <Container position={position}>
                {children}
            </Container>
        </ClientOnlyPortal>
    )
}

export default Notification;
