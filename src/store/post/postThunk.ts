import { createAsyncThunk } from "@reduxjs/toolkit"
import { IError } from "../../models/IError"
import { postApi } from "../../api"

export const savePost = createAsyncThunk<unknown, FormData, { rejectValue: IError }>(
    "post/savePost",
    async (data: FormData, thunkAPI) => {
        const action = await postApi.savePostFiles(data)

        if (action.status !== 201) { // TODO ПРОЙТИ ПО ВСЕМ СТУТСАМ 200 и 201 не ошибочные
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)