import {DetailedHTMLProps, HTMLAttributes} from "react";
import {PostsFragment} from "@/generated/graphql";

export interface PostProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'id'>, PostsFragment {
}
