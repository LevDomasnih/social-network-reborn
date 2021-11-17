import { createSlice } from "@reduxjs/toolkit"
import { login } from "./authThunks"

type initialState = {

}

const initialState: initialState = {

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending.type]: (state) => {

        },
        [login.fulfilled.type]: (state) => {

        },
        [login.rejected.type]: (state) => {

        }
    }
})

export default authSlice.reducer