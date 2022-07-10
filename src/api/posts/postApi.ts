import {instance} from "../api"
import {PostDto} from "./postDto";

const controllerName = 'posts'

export const postApi = {
    createPost(formData: PostDto.CreatePost.Request) {
        return instance.post<PostDto.CreatePost.Response>(`${controllerName}`, formData)
            .then(response => response)
            .catch((error) => error.response)
    },
    getPosts(data: PostDto.GetPosts.Request) {
        return instance.get<PostDto.GetPosts.Response[]>(`${controllerName}/user/${data.userId}`)
            .then(response => response)
            .catch((error) => error.response)
    },
    changeLike(data: PostDto.ChangeLike.Request) {
        return instance.put(`${controllerName}/changeLike/${data.postId}`)
            .then(response => response)
            .catch((error) => error.response)
    }
}
