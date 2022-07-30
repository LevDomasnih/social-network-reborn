import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ClientOnlyPortalProps} from "@/components/ClientOnlyPortal/ClientOnlyPortal.props";

export interface NotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ClientOnlyPortalProps {
    position: 'left-top' | 'right-top' | 'right-bottom' | 'left-bottom',
}
