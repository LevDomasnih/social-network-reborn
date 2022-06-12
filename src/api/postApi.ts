import { instance } from "./api"
import { IPost } from "../models/IPost"

export const postApi = {
    createPost(formData: FormData) {
        return instance.post<unknown>(`posts`, formData)  // FIXME ADD TYPE
            .then(response => response)
            .catch((error) => error.response)
    },
    getPosts(userId: string) {
        return instance.get<IPost[]>(`posts/user/${userId}`)
            .then(response => response)
            .catch((error) => error.response)
    },
    changeLike(postId: string) {
        return instance.put(`posts/changeLike/${postId}`)
            .then(response => response)
            .catch((error) => error.response)
    }
}
