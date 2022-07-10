import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {IProfile} from "../../models/IProfile";
import {IBlog} from "../../models/IBlog";
import {
    createBlog,
    createPost,
    editAvatar,
    editMainImage,
    editProfile,
    getBlogs,
    getPosts,
    getUserWithProfileById
} from "./userThunk";
import {IRecords} from "../../models/IRecords";

interface initialState extends IUser {
    profile: IProfile,
    records: IRecords,
    blogModalIsActive: boolean,
}

const initialState: initialState = {
    id: '',
    email: '',
    login: '',
    profile: {
        status: null,
        about: null,
        birthday: null,
        country: null,
        city: null,
        relatives: null,
        school: null,
        mainImage: null,
        middleName: '',
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        avatar: '',
    },
    records: {
        blogs: [],
        posts: [],
        postsSaved: [],
        postsLiked: [],
    },
    blogModalIsActive: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, data: PayloadAction<Partial<initialState>>) => ({
            ...state,
            ...data.payload,
        }),
        // profile
        setProfile: (state, data: PayloadAction<IProfile & IUser>) => ({
            ...state,
            ...data.payload
        }),
        //records
        setBlogs: (state, data: PayloadAction<IBlog[]>): initialState => ({
            ...state,
            records: {
                ...state.records,
                blogs: data.payload,
            }
        }),
        setBlogModalActive: (state, data: PayloadAction<boolean>): initialState => ({
            ...state,
            blogModalIsActive: data.payload,
        }),
    },
    extraReducers: (builder) => {
        // profile
        builder.addCase(getUserWithProfileById.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        })
        builder.addCase(getUserWithProfileById.pending, () => {

        })
        builder.addCase(getUserWithProfileById.rejected, () => {

        })
        builder.addCase(editProfile.fulfilled, (state, action) => {

        })
        builder.addCase(editProfile.pending, (state, {payload}) => {

        })
        builder.addCase(editProfile.rejected, (state, action) => {

        })
        builder.addCase(editAvatar.fulfilled, (state, action) => {
            state.profile.avatar = action.payload.fileName
        })
        builder.addCase(editAvatar.pending, (state, {payload}) => {

        })
        builder.addCase(editAvatar.rejected, (state, action) => {

        })
        builder.addCase(editMainImage.fulfilled, (state, action) => {
            state.profile.mainImage = action.payload.fileName
        })
        builder.addCase(editMainImage.pending, (state, {payload}) => {

        })
        builder.addCase(editMainImage.rejected, (state, action) => {

        })

        // records
        builder.addCase(createBlog.fulfilled, (state, action) => {
            // state.blogs = action.payload TODO ТУТ БУДУТ СТАТУСЫ НА POST PUT PATCH DELETE И ТД
        })
        builder.addCase(createBlog.pending, (state, {payload}) => {
        })
        builder.addCase(createBlog.rejected, (state, action) => {
        })
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.records.blogs = action.payload
        })
        builder.addCase(getBlogs.pending, (state, {payload}) => {
        })
        builder.addCase(getBlogs.rejected, (state, action) => {
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
        })
        builder.addCase(createPost.pending, (state, {payload}) => {
        })
        builder.addCase(createPost.rejected, (state, action) => {
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.records.posts = action.payload
        })
        builder.addCase(getPosts.pending, (state, {payload}) => {
        })
        builder.addCase(getPosts.rejected, (state, action) => {
        })
    }
})

export const {
    setProfile,
    setBlogs,
    setBlogModalActive,
    setUserData,
} = userSlice.actions
export default userSlice.reducer
