import {createAsyncThunk} from "@reduxjs/toolkit"
import sleep from "../../../utils/sleep"
import {authApi} from "@/api"
import {IToken} from "@/models/IToken";
import {IRegister} from "@/models/IRegister";
import {IError} from "@/models/IError";
import {ILogin} from "@/models/ILogin";

export const register = createAsyncThunk<IToken, IRegister, { rejectValue: IError }>(
    "auth/register",
    async (registerData, thunkAPI) => {
        const action = await authApi.register(registerData)

        await sleep(1000)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const login = createAsyncThunk<IToken, ILogin, { rejectValue: IError }>(
    "auth/login",
    async (authData, thunkAPI) => {
        const action = await authApi.login(authData)

        await sleep(1000)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
