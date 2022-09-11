import {HTMLAttributes} from "react";
type x = {
    info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', filePath: string } | null }
}
export interface UserDialogProps extends HTMLAttributes<HTMLDivElement> {
    id: string,
    status: string,
    info: {
        id: string,
        image?: {
            filePath: string
        } | null
        name: string,
    },
    lastMessage: {
        id: string,
        text: string,
        owner: {
            id: string
            profile: {
                firstName: string
            }
        }
        createdAt: Date,
    },
}
