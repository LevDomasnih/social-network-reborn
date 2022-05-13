import { createSlice } from "@reduxjs/toolkit"
import { savePost } from "./postThunk"

interface initialState {
    postUuid: string | null;

}

const initialState: initialState = {
    postUuid: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(savePost.fulfilled, (state, action) => {
        })
        builder.addCase(savePost.pending, (state, { payload }) => {
        })
        builder.addCase(savePost.rejected, (state, action) => {
        })
    },
})

// export const {} = postSlice.actions

export default postSlice.reducer