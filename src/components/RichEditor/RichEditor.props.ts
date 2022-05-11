import {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";
import {EditorState, RawDraftContentState} from "draft-js";

export interface RichEditorProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'> {
    editorState: EditorState;
    onChange: Dispatch<SetStateAction<EditorState>>;
    saveText: (state: RawDraftContentState) => void;
}
