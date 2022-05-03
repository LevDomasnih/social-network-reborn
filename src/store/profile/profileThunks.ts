import {createAsyncThunk} from "@reduxjs/toolkit";
import {IError} from "../../models/IError";
import {IProfile} from "../../models/IProfile";
import {profileApi} from "../../api/profileApi";

export const editProfile = createAsyncThunk<{updated: boolean}, Omit<IProfile, 'avatar' | 'mainImage'>, { rejectValue: IError }>(
    'profile/edit',
    async (authData: Omit<IProfile, 'avatar' | 'mainImage'>, thunkAPI) => {
        const action = await profileApi.edit(authData)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editAvatar = createAsyncThunk<{fileName: string}, FormData, { rejectValue: IError }>(
    'profile/editAvatar',
    async (authData: FormData, thunkAPI) => {
        const action = await profileApi.editAvatar(authData)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editMainImage = createAsyncThunk<{fileName: string}, FormData, { rejectValue: IError }>(
    'profile/editMainImage',
    async (authData: FormData, thunkAPI) => {
        const action = await profileApi.editMainImage(authData)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
