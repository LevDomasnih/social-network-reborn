import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IBlog} from "../../models/IBlog";

export interface BlogProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, IBlog{
}
