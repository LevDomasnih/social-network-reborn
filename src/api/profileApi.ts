import {IProfile} from "../models/IProfile";
import {instance} from "./api";

export const profileApi = {
    edit({id, ...data}: Omit<IProfile, 'avatar' | 'mainImage'>) {
        return instance.post<IProfile>('profile/edit', data)
            .then(response => response)
            .catch((error) => error.response)
    },
    editAvatar(formData: FormData) {
        return instance.post<{fileName: string}>('profile/editImg/avatar', formData)
            .then(response => response)
            .catch((error) => error.response)
    },
    editMainImage(formData: FormData) {
        return instance.post<{fileName: string}>('profile/editImg/mainImage', formData)
            .then(response => response)
            .catch((error) => error.response)
    }
}
