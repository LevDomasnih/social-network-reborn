import {createSlice} from "@reduxjs/toolkit"
import { login, register } from "./authThunks"
import {IToken} from "../../models/IToken";

interface initialState extends IToken {
    userId: string
}

const initialState: initialState = {
    access_token: '',
    userId: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.access_token = payload.access_token
        })
        builder.addCase(login.pending, (state, { payload }) => {

        })
        builder.addCase(login.rejected, (state, action) => {

        })
        builder.addCase(register.fulfilled, (state, action) => {

        })
        builder.addCase(register.pending, (state, { payload }) => {

        })
        builder.addCase(register.rejected, (state, action) => {

        })
    }
})

export default authSlice.reducer