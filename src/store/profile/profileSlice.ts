import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProfile} from "../../models/IProfile";
import {login, register} from "../auth/authThunks";
import {editAvatar, editMainImage, editProfile} from "./profileThunks";

interface initialState extends IProfile {
}

const initialState: initialState = {
    middleName: '',
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    avatar: '',
    email: '',
    login: '',
    status: null,
    about: null,
    birthday: null,
    country: null,
    city: null,
    relatives: null,
    school: null,
    mainImage: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, data: PayloadAction<IProfile>) => ({
            ...state,
            ...data.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(editProfile.fulfilled, (state, action) => {

        })
        builder.addCase(editProfile.pending, (state, { payload }) => {

        })
        builder.addCase(editProfile.rejected, (state, action) => {

        })
        builder.addCase(editAvatar.fulfilled, (state, action) => {
            state.avatar = action.payload.fileName
        })
        builder.addCase(editAvatar.pending, (state, { payload }) => {

        })
        builder.addCase(editAvatar.rejected, (state, action) => {

        })
        builder.addCase(editMainImage.fulfilled, (state, action) => {
            state.mainImage = action.payload.fileName
        })
        builder.addCase(editMainImage.pending, (state, { payload }) => {

        })
        builder.addCase(editMainImage.rejected, (state, action) => {

        })
    }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
