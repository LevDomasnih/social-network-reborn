export interface MessageProps {
    text: string
    owner: {
        id: string
        profile: {
            avatar?: {
                filePath: string
            } | null
            firstName: string
        }
    }
    createdAt: Date
}
