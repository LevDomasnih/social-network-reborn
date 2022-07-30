import {Dispatch, SetStateAction} from "react";

export interface ClientOnlyPortalProps {
    selector: string,
    mounted: boolean,
    setMounted: Dispatch<SetStateAction<boolean>>
}
