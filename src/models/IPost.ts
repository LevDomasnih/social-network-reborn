export interface IPost {
    id: string,
    profile: {
        avatar: string | null,
        firstName: string,
        lastName: string,
    },
    text: string,
    createdAt: string,
    updatedAt: string,
    likes: number,
    views: number,
    isLiked: boolean,
}
