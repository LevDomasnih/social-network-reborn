import { createAsyncThunk } from "@reduxjs/toolkit"
import {authAPI} from "../../API/authAPI";
import {IAuth} from "../../models/IAuth";

export const login = createAsyncThunk(
    'auth/login',
    async (authData: IAuth, thunkAPI) => {
        try {
            return authAPI.login(authData)
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)