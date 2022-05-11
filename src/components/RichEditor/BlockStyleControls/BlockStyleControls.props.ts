import {DetailedHTMLProps, HTMLAttributes} from "react";
import {EditorState} from "draft-js";

export interface BlockStyleControlsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    editorState: EditorState;
    onToggle: (blockType: string) =>  void
}
