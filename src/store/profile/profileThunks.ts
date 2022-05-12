import {createAsyncThunk} from "@reduxjs/toolkit";
import {IError} from "../../models/IError";
import {IProfile} from "../../models/IProfile";
import { profileApi } from "../../api"

export const editProfile = createAsyncThunk<{updated: boolean}, Omit<IProfile, 'avatar' | 'mainImage'>, { rejectValue: IError }>(
    'profile/edit',
    async (data: Omit<IProfile, 'avatar' | 'mainImage'>, thunkAPI) => {
        const action = await profileApi.edit(data)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editAvatar = createAsyncThunk<{fileName: string}, FormData, { rejectValue: IError }>(
    'profile/editAvatar',
    async (data: FormData, thunkAPI) => {
        const action = await profileApi.editAvatar(data)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editMainImage = createAsyncThunk<{fileName: string}, FormData, { rejectValue: IError }>(
    'profile/editMainImage',
    async (data: FormData, thunkAPI) => {
        const action = await profileApi.editMainImage(data)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
