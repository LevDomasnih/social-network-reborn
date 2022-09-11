import {DetailedHTMLProps, HTMLAttributes} from "react";
import {BlogsFragment} from "@/generated/graphql";

export interface BlogProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, BlogsFragment {
}
