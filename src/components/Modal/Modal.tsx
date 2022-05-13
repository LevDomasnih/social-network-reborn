import {FC, MouseEventHandler, useEffect} from "react";
import {ModalEventType, ModalProps} from "./Modal.props";

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
        if (typeof e.target.className === 'string' && e.target.className.includes('modal')) { // FIXME Продумать
            props.closeModal()
        }
    }

    if (!active) {
        return null
    }

    return (
        <div className='w-full h-screen top-0 fixed bg-opacity-50 bg-black z-20 flex justify-center items-center modal' onMouseDown={closeModal}>
            {children}
        </div>
    )
}
