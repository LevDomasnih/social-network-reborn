import { instance } from "./api"

export const postApi = {
    savePostFiles(formData: FormData) {
        return instance.post<unknown>('posts', formData)
            .then(response => response)
            .catch((error) => error.response)
    }
}