export interface MessageProps {
    ownerId: string;
    text: string;
    createdAt: Date;
    users?: {
        id: string,
        avatar: string | null,
        lastName: string,
        firstName: string
    }[]
}
