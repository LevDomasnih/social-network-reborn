import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { saveBlog } from "./postThunk"
import {IBlog} from "../../models/IBlog";

interface initialState {
    blogs: IBlog[],
    postsAnswer: IBlog[],
    postsSaved: IBlog[],
    postsLiked: IBlog[],
}

const initialState: initialState = { // ARRAY!!!
    blogs: [],
    postsAnswer: [],
    postsSaved: [],
    postsLiked: [],
}

const postSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        setAllPosts: (state, data: PayloadAction<IBlog[]>): initialState => ({
            ...state,
            blogs: data.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(saveBlog.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
        builder.addCase(saveBlog.pending, (state, { payload }) => {
        })
        builder.addCase(saveBlog.rejected, (state, action) => {
        })
    },
})

export const { setAllPosts } = postSlice.actions
export default postSlice.reducer
