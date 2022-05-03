import {ITimeStamps} from "./ITimeStamps";

export interface IProfile {
    id: string
    firstName: string
    lastName: string
    avatar: string
    phone: string
    login: string
    email: string
    middleName: string
    mainImage: string | null
    status: string | null
    about: string | null
    birthday: string | null
    country: string | null
    city: string | null
    relatives: string | null
    school: string | null
}
