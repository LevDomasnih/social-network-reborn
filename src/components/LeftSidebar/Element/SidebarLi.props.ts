import {NextRouter} from "next/dist/shared/lib/router/router";

export interface SidebarLiProps {
    name: string
    router: NextRouter
    route: string
}
