import { createAsyncThunk } from "@reduxjs/toolkit"
import {authAPI} from "../../API/authAPI";
import {ILogin} from "../../models/ILogin";
import { IRegister } from "../../models/IRegister"

export const register = createAsyncThunk(
    'auth/register',
    async (registerData: IRegister, thunkAPI) => {
        try {
            return authAPI.register(registerData)
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (authData: ILogin, thunkAPI) => {
        try {
            return authAPI.login(authData)
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)