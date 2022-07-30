import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IBlog} from "../../models/IBlog";
import {ITextBlock} from "../../models/ITextBlock";

export interface PostProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, Omit<IBlog, 'text' | 'entityMap'>{
    text: ITextBlock[] | string;
    entityMap?: Record<string, any>;
}
