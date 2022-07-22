import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ChatDialogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeDialog: {
        id: string,
        status: string,
        user: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        },
        users: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        }[],
        messages: {
            id: string,
            text: string,
            ownerId: string,
            createdAt: Date,
            updatedAt: Date
        }[]
    } | null,
    currentUserId: string
}
