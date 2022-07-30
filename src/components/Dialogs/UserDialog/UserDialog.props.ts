import {HTMLAttributes} from "react";

export interface UserDialogProps extends HTMLAttributes<HTMLDivElement> {
    id: string,
    status: string,
    info: {
        id: string,
        image: string | null,
        name: string,
    },
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
        createdAt: Date,
        updatedAt: Date
    },
}
