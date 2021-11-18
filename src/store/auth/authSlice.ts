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
    extraReducers: {
        [login.pending.type]: (state, {payload}: PayloadAction<IToken>) => {

        },
        [login.fulfilled.type]: (state, {payload}: PayloadAction<IToken>) => {

        },
        [login.rejected.type]: (state, {payload}: PayloadAction<IToken>) => {

        }
    }
})

export default authSlice.reducer