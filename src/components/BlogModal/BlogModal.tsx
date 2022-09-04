import React, {FC, FormEvent, useEffect, useRef, useState} from "react"
import {EditorState, RawDraftContentState} from "draft-js"
import {BlogModalProps} from "./BlogModal.props"
import {Modal} from "@/components"
import {BackgroundImage} from "../BackgroundImage/BackgroundImage"
import {RichEditor} from "@/components"
import {useFileReader} from "@/hooks"
import {useAppDispatch, useAppSelector} from "@/store/hooks"
import styled from "styled-components";
import {setBlogModalActive} from "@/store/modules/user/userSlice";
import {
    GetUserBlogsDocument,
    GetUserPostsDocument,
    useCreateBlogMutation,
    useGetBaseInfoQuery
} from "@/generated/graphql";

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

    const baseInfoQuery = useGetBaseInfoQuery()

    useEffect(() => {
        setMainImage(null)
        setEditor(EditorState.createEmpty())
    }, [active])

    const closeModal = () => {
        dispatch(setBlogModalActive(false))
    }

    const [createBlog] = useCreateBlogMutation({
        update: (cache, {data}) => {
            const blogsQuery: {blogsOfUser: []} | null = cache.readQuery({query: GetUserBlogsDocument, variables: {id: baseInfoQuery.data?.baseInfo.id}})

            console.log(blogsQuery)

            cache.writeQuery({
                query: GetUserBlogsDocument,
                variables: {id: baseInfoQuery.data?.baseInfo.id},
                data: {
                    blogsOfUser: [data!.createBlog, ...blogsQuery!.blogsOfUser]
                }
            })
        }
    })

    const handleCreateBlog = (state: RawDraftContentState) => {
        createBlog({
            variables: {
                files: mainImageFile ? [mainImageFile] : [],
                blogData: {
                    entityMap: state.entityMap,
                    textBlocks: state.blocks
                }
            }
        })
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
        <Modal data-testid='modal' active={active} closeModal={closeModal} {...props}>
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
