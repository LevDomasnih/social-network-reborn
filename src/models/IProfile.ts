import {ITimeStamps} from "./ITimeStamps";

export interface IProfile {
    id: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    login: string
    email: string
    mainImage?: string | null
    avatar?: string | null
    status?: string | null
    about?: string | null
    birthday?: string | null
    country?: string | null
    city?: string | null
    relatives?: string | null
    school?: string | null
}
