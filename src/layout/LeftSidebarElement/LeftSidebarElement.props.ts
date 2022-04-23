import {NextRouter} from "next/dist/shared/lib/router/router";

export interface LeftSidebarElementProps {
    name: string
    router: NextRouter
    route: string
}
