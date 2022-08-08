import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {login, register} from "./authThunks"
import {IAuth} from "@/models/IAuth";
import {IToken} from "@/models/IToken";
import {instance} from "@/api";

interface initialState extends IAuth, IToken {
    authError: {
        message: string | null
        requestId: string | null
    }
    loading: boolean
}

const initialState: initialState = {
    access_token: '',
    id: '',
    authError: {
        message: null,
        requestId: null,
    },
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    loading: false,
    avatar: null,
    notifications: null,
}

interface SetAuth extends IAuth, IToken {

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
        setAuth: (state, data: PayloadAction<SetAuth>) => {
            instance.defaults.headers.common["Authorization"] = `Bearer ${(data.payload.access_token)}`

            return ({
                ...state,
                ...data.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, {payload}) => {
            state.access_token = payload.access_token
            state.loading = false
            state.authError = {
                message: null,
                requestId: null,
            }
        })
        builder.addCase(login.pending, (state, {payload}) => {
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
        builder.addCase(register.pending, (state, {payload}) => {
            state.loading = true
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.authError = {
                // message: action.payload!.message,
                requestId: action.meta.requestId,
            }
        })
    },
})

export const {defaultError, setAuth} = authSlice.actions
export default authSlice.reducer
