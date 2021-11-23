import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { login } from "./authThunks"
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
        builder.addCase(login.fulfilled, (state, payload) => {

        })
        builder.addCase(login.pending, (state, { payload }) => {

        })
        builder.addCase(login.rejected, (state, action) => {

        })
    }
})

export default authSlice.reducer