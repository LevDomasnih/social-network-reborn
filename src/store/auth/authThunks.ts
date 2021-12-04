import { createAsyncThunk } from "@reduxjs/toolkit"
import {authAPI} from "../../API/authAPI";
import {ILogin} from "../../models/ILogin";
import { IRegister } from "../../models/IRegister"
import { IToken } from "../../models/IToken"
import { IUser } from "../../models/IUser"
import { instance } from "../../API/api"

export const register = createAsyncThunk<IUser, IRegister>(
    'auth/register',
    async (registerData: IRegister, thunkAPI) => {
        try {
            return authAPI.register(registerData)
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const login = createAsyncThunk<IToken, ILogin>(
    'auth/login',
    async (authData: ILogin, thunkAPI) => {
        try {
            const action = await authAPI.login(authData)
            instance.defaults.headers.common["Authorization"] = `Bearer ${action.access_token}`

            return action
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)
