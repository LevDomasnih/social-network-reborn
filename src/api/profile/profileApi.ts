import {instance} from "../api";
import {ProfileDto} from "./profileDto";

const controllerName = 'profile'

export const profileApi = {
    edit({id, ...data}: ProfileDto.Edit.Request) {
        return instance.post<ProfileDto.Edit.Response>(`${controllerName}/edit`, data)
            .then(response => response)
            .catch((error) => error.response)
    },
    editAvatar(formData: ProfileDto.EditAvatar.Request) {
        return instance.post<ProfileDto.EditAvatar.Response>(`${controllerName}/editImg/avatar`, formData)
            .then(response => response)
            .catch((error) => error.response)
    },
    editMainImage(formData: ProfileDto.EditMainImage.Request) {
        return instance.post<ProfileDto.EditMainImage.Response>(`${controllerName}/editImg/mainImage`, formData)
            .then(response => response)
            .catch((error) => error.response)
    }
}
