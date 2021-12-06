import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPI } from "../../API/authAPI"
import { ILogin } from "../../models/ILogin"
import { IRegister } from "../../models/IRegister"
import { IToken } from "../../models/IToken"
import { IError } from "../../models/IError"
import sleep from "../../utils/sleep"

export const register = createAsyncThunk<IToken, IRegister, { rejectValue: IError }>(
    "auth/register",
    async (registerData: IRegister, thunkAPI) => {
        const action = await authAPI.register(registerData)

        await sleep(1000)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const login = createAsyncThunk<IToken, ILogin, { rejectValue: IError }>(
    "auth/login",
    async (authData: ILogin, thunkAPI) => {
        const action = await authAPI.login(authData)

        await sleep(1000)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
