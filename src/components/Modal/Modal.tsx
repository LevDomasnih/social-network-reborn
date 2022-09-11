import {FC, MouseEventHandler, useEffect} from "react";
import {ModalProps} from "./Modal.props";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Modal: FC<ModalProps> = ({children, active, ...props}) => {

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            document.body.style.userSelect = 'none';

            return () => {
                document.body.style.overflow = "auto";
                document.body.style.userSelect = "auto";
            };
        }
    }, [active])

    const closeModal: MouseEventHandler<HTMLSpanElement> = (e) => {
        // @ts-ignore
        if (typeof e.target.className === 'string' && e.target.className.includes('modal')) { // FIXME Продумать
            props.closeModal()
        }
    }

    if (!active) {
        return null
    }

    return (
        <Container className='modal' onMouseDown={closeModal} {...props}>
            {children}
        </Container>
    )
}
