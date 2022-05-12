import { createSlice } from "@reduxjs/toolkit"
import { savePostFiles } from "./postThunk"

interface initialState {
    mainImage: string | null;
    postUuid: string | null;

}

const initialState: initialState = {
    mainImage: null,
    postUuid: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(savePostFiles.fulfilled, (state, action) => {
            state.mainImage = action.payload[0]
        })
        builder.addCase(savePostFiles.pending, (state, { payload }) => {
        })
        builder.addCase(savePostFiles.rejected, (state, action) => {
        })
    }
})

// export const {} = postSlice.actions

export default postSlice.reducer