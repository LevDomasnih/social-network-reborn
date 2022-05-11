import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface BackgroundImageProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'src'>{
    src: string | null;
    isEdit?: boolean;
}
