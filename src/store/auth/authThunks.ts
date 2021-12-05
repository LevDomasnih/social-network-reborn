import { createAsyncThunk } from "@reduxjs/toolkit"
import {authAPI} from "../../API/authAPI";
import {ILogin} from "../../models/ILogin";
import { IRegister } from "../../models/IRegister"
import { IToken } from "../../models/IToken"
import { IUser } from "../../models/IUser"
import {IError} from "../../models/IError";

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

export const login = createAsyncThunk<IToken, ILogin, { rejectValue: IError }>(
    'auth/login',
    async (authData: ILogin, thunkAPI) => {
        const action = await authAPI.login(authData)

        if (action.status !== 'success') {
            return thunkAPI.rejectWithValue(action);
        }

        return action
        // try {
        //     const action = await authAPI.login(authData)
        //     console.log({action})
        //     // instance.defaults.headers.common["Authorization"] = `Bearer ${action.access_token}`
        //
        //     return action
        // } catch (e) {
        //     console.log({e})
        //     return thunkAPI.rejectWithValue(e);
        // }
    }
)
