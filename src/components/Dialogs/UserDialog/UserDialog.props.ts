import {HTMLAttributes} from "react";

export interface UserDialogProps extends HTMLAttributes<HTMLDivElement> {
    id: string,
    status: string,
    userId: string,
    users: {
        id: string,
        avatar: string | null,
        lastName: string,
        firstName: string
    }[],
    lastMessage: {
        id: string,
        text: string,
        ownerId: string,
        createAt: Date,
        updateAt: Date
    },
}
