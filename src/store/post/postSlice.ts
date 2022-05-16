import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { savePost } from "./postThunk"
import {IPost} from "../../models/IPost";

interface initialState {
    allPosts: IPost[],
    postsAnswer: IPost[],
    postsSaved: IPost[],
    postsLiked: IPost[],
}

const initialState: initialState = { // ARRAY!!!
    allPosts: [],
    postsAnswer: [],
    postsSaved: [],
    postsLiked: [],
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setAllPosts: (state, data: PayloadAction<IPost[]>) => ({
            ...state,
            allPosts: data.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(savePost.fulfilled, (state, action) => {
            state.allPosts = [...state.allPosts, action.payload]
        })
        builder.addCase(savePost.pending, (state, { payload }) => {
        })
        builder.addCase(savePost.rejected, (state, action) => {
        })
    },
})

export const { setAllPosts } = postSlice.actions
export default postSlice.reducer
