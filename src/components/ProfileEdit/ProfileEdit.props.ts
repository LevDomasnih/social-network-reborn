import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProfile} from "../../models/IProfile";

export interface ProfileEditProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    profile: IProfile
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}
