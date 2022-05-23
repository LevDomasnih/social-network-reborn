import { createAsyncThunk } from "@reduxjs/toolkit"
import { IError } from "../../models/IError"
import { postApi } from "../../api"
import {IBlog} from "../../models/IBlog";

export const saveBlog = createAsyncThunk<IBlog[], FormData, { rejectValue: IError }>(
    "blogs/saveBlog",
    async (data: FormData, thunkAPI) => {
        const action = await postApi.saveBlogFiles(data)

        if (action.status !== 201) { // TODO ПРОЙТИ ПО ВСЕМ СТУТСАМ 200 и 201 не ошибочные
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
