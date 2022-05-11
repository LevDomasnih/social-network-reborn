import {DetailedHTMLProps, HTMLAttributes, MouseEvent} from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    active: boolean
    closeModal: () => void
}

export interface ModalEventType extends MouseEvent<HTMLDivElement, MouseEvent> {
}
