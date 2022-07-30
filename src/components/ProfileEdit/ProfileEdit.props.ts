import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProfile} from "../../models/IProfile";
import {IUser} from "../../models/IUser";

export interface ProfileEditProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    profile: IProfile & IUser
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}
