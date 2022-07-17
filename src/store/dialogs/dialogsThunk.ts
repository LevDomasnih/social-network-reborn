import {createAsyncThunk} from "@reduxjs/toolkit";
import {IError} from "@/models/IError";
import {dialogs} from "@/api/dialogs/dialogsApi";

export const getDialogByUserId = createAsyncThunk<any, string, { rejectValue: IError }>(
    'dialogs/getDialogByUserId',
    async (userId, thunkAPI) => {
        const action = await dialogs.getDialog(userId)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    }
)

export const sendMessage = createAsyncThunk<any, {text: string, secondOwnerId: string}, { rejectValue: IError }>(
    'dialogs/sendMessage',
    async (data, thunkAPI) => {
        const action = await dialogs.sendMessage(data)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    }
)
