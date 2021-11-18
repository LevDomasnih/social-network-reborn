import {ITimeStamps} from "./ITimeStamps";
import {IBase} from "./IBase";

export interface IProfile extends ITimeStamps, IBase {
    name: string
    surname: string
    avatar: string
    status: string
    about: string
    dateOfBirth: string
    country: string
    city: string
    brothersAndSisters: string
    school: string
}