import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createBlog, createPost, getBlogs, getPosts } from "./recordsThunk"
import { IBlog } from "../../models/IBlog"
import { IPost } from "../../models/IPost"

interface initialState {
    blogModalIsActive: boolean,
    blogs: IBlog[],
    posts: IPost[],
    postsSaved: IPost[],
    postsLiked: IPost[],
}

const initialState: initialState = {
    blogModalIsActive: false,
    blogs: [],
    posts: [],
    postsSaved: [],
    postsLiked: [],
}

const recordsSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        setBlogs: (state, data: PayloadAction<IBlog[]>): initialState => ({
            ...state,
            blogs: data.payload,
        }),
        setBlogModalActive: (state, data: PayloadAction<boolean>): initialState => ({
            ...state,
            blogModalIsActive: data.payload,
        }),
    },
    extraReducers: (builder) => {
        builder.addCase(createBlog.fulfilled, (state, action) => {
            // state.blogs = action.payload TODO ТУТ БУДУТ СТАТУСЫ НА POST PUT PATCH DELETE И ТД
        })
        builder.addCase(createBlog.pending, (state, { payload }) => {
        })
        builder.addCase(createBlog.rejected, (state, action) => {
        })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(getBlogs.pending, (state, { payload }) => {
        })
        builder.addCase(getBlogs.rejected, (state, action) => {
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
        })
        builder.addCase(createPost.pending, (state, { payload }) => {
        })
        builder.addCase(createPost.rejected, (state, action) => {
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        builder.addCase(getPosts.pending, (state, { payload }) => {
        })
        builder.addCase(getPosts.rejected, (state, action) => {
        })
    },
})

export const { setBlogs, setBlogModalActive } = recordsSlice.actions
export default recordsSlice.reducer
