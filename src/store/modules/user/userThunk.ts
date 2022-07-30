import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersDto} from "@/api/users/usersDto";
import {usersApi} from "@/api/users/usersApi";
import {IProfile} from "@/models/IProfile";
import {blogApi, postApi, profileApi} from "@/api";
import {IBlog} from "@/models/IBlog";
import {IPost} from "@/models/IPost";
import {IError} from "@/models/IError";

//profile
export const getUserWithProfileById = createAsyncThunk<UsersDto.GetUserById.Response, string, { rejectValue: IError }>(
    'profile/getUserProfile',
    async (userId, thunkAPI) => {
        const action = await usersApi.getUserById({id: userId})

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    }
)

export const editProfile = createAsyncThunk<{ updated: boolean }, Omit<IProfile, 'avatar' | 'mainImage'>, { rejectValue: IError }>(
    'profile/edit',
    async (data: Omit<IProfile, 'avatar' | 'mainImage'>, thunkAPI) => {
        const action = await profileApi.edit(data)

        if (action.status !== 200) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editAvatar = createAsyncThunk<{ fileName: string }, FormData, { rejectValue: IError }>(
    'profile/editAvatar',
    async (data: FormData, thunkAPI) => {
        const action = await profileApi.editAvatar(data)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const editMainImage = createAsyncThunk<{ fileName: string }, FormData, { rejectValue: IError }>(
    'profile/editMainImage',
    async (data: FormData, thunkAPI) => {
        const action = await profileApi.editMainImage(data)

        if (action.status !== 201) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

//records

export const createBlog = createAsyncThunk<IBlog[], { formData: FormData, userId: string }, { rejectValue: IError }>(
    "records/blogs/createBlog",
    async (data, thunkAPI) => {
        const action = await blogApi.createBlog(data.formData)

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        thunkAPI.dispatch(getBlogs(data.userId))

        return action.data
    },
)

export const getBlogs = createAsyncThunk<IBlog[], string, { rejectValue: IError }>(
    "records/blogs/getBlogs",
    async (userId, thunkAPI) => {
        const action = await blogApi.getBlogs({userId})

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const createPost = createAsyncThunk<any, { formData: FormData, userId: string }, { rejectValue: IError }>(
    "records/posts/createPost",
    async (data, thunkAPI) => {
        const action = await postApi.createPost(data.formData)

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        thunkAPI.dispatch(getPosts(data.userId))

        return action.data
    },
)

export const getPosts = createAsyncThunk<IPost[], string, { rejectValue: IError }>(
    "records/posts/getPosts",
    async (userId, thunkAPI) => {
        const action = await postApi.getPosts({userId})

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const changeLike = createAsyncThunk<unknown, string, { rejectValue: IError }>(
    "records/posts/changeLike",
    async (postId, thunkAPI) => {
        const action = await postApi.changeLike({postId})

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
