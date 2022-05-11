import {FC, useState} from "react";
import {PostModalProps} from "./PostModal.props";
import {Modal} from "../Modal/Modal";
import cn from "classnames";
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";
import {RichEditor} from "../RichEditor/RichEditor";
import {EditorState, RawDraftContentState} from "draft-js";

export const PostModal: FC<PostModalProps> = ({active, closeModal, className, ...props}) => {
    const [state, setState] = useState(EditorState.createEmpty())

    const postCreated = (state: RawDraftContentState) => {
        console.log(state)
    }

    return (
        <Modal active={active} closeModal={closeModal} className={cn('', className)} {...props}>
            <div className='w-[80%] h-[90%] bg-white rounded-md overflow-auto'>
                <div className='h-[500px] w-full flex'>
                    <BackgroundImage src={null} className='w-full h-full relative'/>
                </div>
                <RichEditor editorState={state} saveText={postCreated} onChange={setState}/>
            </div>
        </Modal>
    )
}
