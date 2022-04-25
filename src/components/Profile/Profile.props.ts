import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProfile} from "../../models/IProfile";

export interface ProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    profile: IProfile
}
