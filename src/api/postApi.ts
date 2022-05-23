import { instance } from "./api"

export const postApi = {
    saveBlogFiles(formData: FormData) {
        return instance.post<unknown>('blogs', formData)
            .then(response => response)
            .catch((error) => error.response)
    }
}
