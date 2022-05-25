import React, { FC, FormEvent, useEffect, useRef, useState } from "react"
import { EditorState, RawDraftContentState } from "draft-js"
import cn from "classnames"
import { BlogModalProps } from "./BlogModal.props"
import { Modal } from "../Modal/Modal"
import { BackgroundImage } from "../BackgroundImage/BackgroundImage"
import { RichEditor } from "../RichEditor/RichEditor"
import { useFileReader } from "../../hooks"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { createBlog } from "../../store/records/recordsThunk"
import { setBlogModalActive } from "../../store/records/recordsSlice"

export const BlogModal: FC<BlogModalProps> = ({ active, className, ...props }) => {
    const [editor, setEditor] = useState(EditorState.createEmpty())
    const [mainImage, setMainImage, mainImageFile] = useFileReader(null)
    const mainImageInput = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const { userId } = useAppSelector(state => state.authSlice)

    useEffect(() => {
        setMainImage(null)
        setEditor(EditorState.createEmpty())
    }, [active])

    const closeModal = () => {
        dispatch(setBlogModalActive(false))
    }

    const handleCreateBlog = (state: RawDraftContentState) => {
        let data = new FormData()
        if (mainImageFile) {
            data.append("files", mainImageFile)
        }
        data.append("textBlocks", JSON.stringify(state.blocks))
        data.append("entityMap", JSON.stringify(state.entityMap))
        dispatch(createBlog({ formData: data, userId }))
        closeModal()
    }

    const saveMainImage = () => {
        if (mainImageInput.current) {
            mainImageInput.current.click()
        }
    }

    const mainImageChange = (event: FormEvent<HTMLInputElement>) => {
        setMainImage((event.target as HTMLInputElement).files![0])
    }

    return (
        <Modal active={active} closeModal={closeModal} className={cn("", className)} {...props}>
            <div className="w-[80%] h-[90%] bg-white rounded-md overflow-auto">
                <div className="h-[500px] w-full flex">
                    <BackgroundImage
                        src={mainImage}
                        className="w-full h-full relative"
                        onClick={saveMainImage}
                        ref={mainImageInput}
                        onChange={mainImageChange}
                    />
                </div>
                <RichEditor editorState={editor} saveText={handleCreateBlog} onChange={setEditor}/>
            </div>
        </Modal>
    )
}
