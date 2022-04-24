import {createSlice} from "@reduxjs/toolkit";
import {IProfile} from "../../models/IProfile";

interface initialState extends IProfile {
}

const initialState: initialState = {
    id: null,
    firstName: null,
    lastName: null,
    phone: null,
    avatar: null,
    status: null,
    about: null,
    birthday: null,
    country: null,
    city: null,
    relatives: null,
    school: null,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, data) => ({
            ...state,
            ...data.payload
        })
    }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
