import React, {FC, FormEvent, useEffect, useRef, useState} from "react"
import {EditorState, RawDraftContentState} from "draft-js"
import {BlogModalProps} from "./BlogModal.props"
import {Modal} from "../Modal/Modal"
import {BackgroundImage} from "../BackgroundImage/BackgroundImage"
import {RichEditor} from "../RichEditor/RichEditor"
import {useFileReader} from "../../hooks"
import {useAppDispatch, useAppSelector} from "../../store/hooks"
import {createBlog} from "../../store/records/recordsThunk"
import {setBlogModalActive} from "../../store/records/recordsSlice"
import styled from "styled-components";

const ContainerEditor = styled.div`
  overflow: auto;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 0.375rem;
  width: 80%;
  height: 90%;
`;

const ContainerBackground = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;

const Background = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BlogModal: FC<BlogModalProps> = ({active, ...props}) => {
    const [editor, setEditor] = useState(EditorState.createEmpty())
    const [mainImage, setMainImage, mainImageFile] = useFileReader(null)
    const mainImageInput = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const {userId} = useAppSelector(state => state.authSlice)

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
        dispatch(createBlog({formData: data, userId}))
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
        <Modal active={active} closeModal={closeModal} {...props}>
            <ContainerEditor>
                <ContainerBackground>
                    <Background
                        src={mainImage}
                        onClick={saveMainImage}
                        ref={mainImageInput}
                        onChange={mainImageChange}
                    />
                </ContainerBackground>
                <RichEditor editorState={editor} saveText={handleCreateBlog} onChange={setEditor}/>
            </ContainerEditor>
        </Modal>
    )
}

export default BlogModal
