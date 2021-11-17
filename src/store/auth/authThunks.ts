import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk(
    'auth/login',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/user2s')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)