import { instance } from "./api"

export const postApi = {
    savePostFiles(formData: FormData) {
        return instance.post<{fileName: string}>('posts/saveTempImage', formData)
            .then(response => response)
            .catch((error) => error.response)
    }
}