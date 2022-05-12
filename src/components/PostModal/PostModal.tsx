import React, { FC, FormEvent, useState } from "react"
import {PostModalProps} from "./PostModal.props";
import {Modal} from "../Modal/Modal";
import cn from "classnames";
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";
import {RichEditor} from "../RichEditor/RichEditor";
import {EditorState, RawDraftContentState} from "draft-js";
import { editMainImage } from "../../store/profile/profileThunks"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { savePostFiles } from "../../store/post/postThunk"

export const PostModal: FC<PostModalProps> = ({active, closeModal, className, ...props}) => {
    const [state, setState] = useState(EditorState.createEmpty());
    const dispatch = useAppDispatch();
    const { mainImage } = useAppSelector(state => state.postSlice)

    const mainImageInput = React.useRef<HTMLInputElement>(null);

    const postCreated = (state: RawDraftContentState) => {
        console.log(state)
    }

    const saveMainImage = () => {
        if (mainImageInput.current) {
            mainImageInput.current.click();
        }
    }

    const mainImageChange = (event: FormEvent<HTMLInputElement>) => {
        //@ts-ignore
        const fileUploaded: File = event.target.files[0];
        const formData = new FormData();
        formData.append("files", fileUploaded);
        dispatch(savePostFiles(formData))
    }

    return (
        <Modal active={active} closeModal={closeModal} className={cn('', className)} {...props}>
            <div className='w-[80%] h-[90%] bg-white rounded-md overflow-auto'>
                <div className='h-[500px] w-full flex'>
                    <BackgroundImage
                        src={mainImage}
                        className='w-full h-full relative'
                        onClick={saveMainImage}
                        ref={mainImageInput}
                        onChange={mainImageChange}
                    />
                </div>
                <RichEditor editorState={state} saveText={postCreated} onChange={setState}/>
            </div>
        </Modal>
    )
}
