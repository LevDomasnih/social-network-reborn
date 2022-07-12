import {HTMLAttributes} from "react";

export interface UserDialogProps extends HTMLAttributes<HTMLDivElement> {
    userName: string,
    lastMessage: string,
    messageTime: Date,
    isRead: boolean,
    onClick: () => void,
}
