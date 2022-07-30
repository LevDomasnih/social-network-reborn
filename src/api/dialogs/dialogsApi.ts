import {instance} from "@/api";

const controllerName = 'dialogs'

export const dialogs = {
    getDialog(userId: string) {
        return instance.get<any>(`${controllerName}/${userId}`)
            .then(response => response)
            .catch((error) => error.response)
    },
    sendMessage(data: {text: string, secondOwnerId: string}) {
        return instance.post<any>(`${controllerName}`, data)
            .then(response => response)
            .catch((error) => error.response)
    }
}
