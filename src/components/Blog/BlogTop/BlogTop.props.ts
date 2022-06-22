import {EditorState} from "draft-js";

export interface BlogTopProps {
    avatar: null | string;
    firstName: null | string;
    lastName: null | string;
    createdAt: string;
    editor: EditorState
}
