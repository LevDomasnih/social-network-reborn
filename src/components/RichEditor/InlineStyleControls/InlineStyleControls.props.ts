import {DetailedHTMLProps, HTMLAttributes} from "react";
import {EditorState} from "draft-js";

export interface InlineStyleControlsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    editorState: EditorState;
    onToggle: (inlineStyle: string) =>  void
}
