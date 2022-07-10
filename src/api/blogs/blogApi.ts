import {instance} from "../api"
import {BlogDto} from "./blogDto";

const controllerName = 'blogs'

export const blogApi = {
    createBlog(formData: BlogDto.CreateBlog.Request) {
        return instance.post<BlogDto.CreateBlog.Response[]>(`${controllerName}`, formData)
            .then(response => response)
            .catch((error) => error.response)
    },
    getBlogs(data: BlogDto.GetBlogs.Request) {
        return instance.get<BlogDto.GetBlogs.Response[]>(`${controllerName}/user/${data.userId}`)
            .then(response => response)
            .catch((error) => error.response)
    },
}
