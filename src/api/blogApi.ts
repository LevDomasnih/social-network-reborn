import { instance } from "./api"
import { IBlog } from "../models/IBlog"

export const blogApi = {
    createBlog(formData: FormData) {
        return instance.post<IBlog[]>("blogs", formData)
            .then(response => response)
            .catch((error) => error.response)
    },
    getBlogs(userId: string) {
        return instance.get<IBlog[]>(`blogs/user/${userId}`)
            .then(response => response)
            .catch((error) => error.response)
    },
}
