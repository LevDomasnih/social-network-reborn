import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProfile} from "../../models/IProfile";
import {IUser} from "../../models/IUser";

export interface ProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userProfile: {
        profile: IProfile
    } & IUser
}
