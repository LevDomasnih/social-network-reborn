import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ChatDialogProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    activeDialog: {
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
