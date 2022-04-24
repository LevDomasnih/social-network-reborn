import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./authThunks"
import { IToken } from "../../models/IToken"

interface initialState extends IToken {
    userId: string
    authError: {
        message: string | null
        requestId: string | null
    }
    loading: boolean
    login: string | null
    email: string | null
}

const initialState: initialState = {
    access_token: "",
    userId: "",
    authError: {
        message: null,
        requestId: null,
    },
    loading: false,
    login: null,
    email: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        defaultError: (state) => ({
            ...state,
            authError: {
                message: null,
                requestId: null,
            },
        }),
        setAuth: (state, data) => {
            return ({
                ...state,
                access_token: data.payload.token,
                userId: data.payload.userId,
                login: data.payload.login,
                email: data.payload.email,
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.access_token = payload.access_token
            state.loading = false
            state.authError = {
                message: null,
                requestId: null,
            }
        })
        builder.addCase(login.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.authError = {
                message: action.payload!.message,
                requestId: action.meta.requestId,
            }
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.access_token = action.payload.access_token
            state.loading = false
            state.authError = {
                message: null,
                requestId: null,
            }
        })
        builder.addCase(register.pending, (state, { payload }) => {
            state.loading = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.authError = {
                message: action.payload!.message,
                requestId: action.meta.requestId,
            }
        })
    },
})

export const { defaultError, setAuth } = authSlice.actions

export default authSlice.reducer
