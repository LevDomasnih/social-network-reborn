import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface StyleButtonProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'style'> {
    onToggle: (blockType: string) => void;
    style: string;
    active: boolean;
    label: string;
}
