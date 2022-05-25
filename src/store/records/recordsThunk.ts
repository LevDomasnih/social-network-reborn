import { createAsyncThunk } from "@reduxjs/toolkit"
import { IError } from "../../models/IError"
import { blogApi, postApi } from "../../api"
import { IBlog } from "../../models/IBlog"
import { IPost } from "../../models/IPost"

export const createBlog = createAsyncThunk<IBlog[], {formData: FormData, userId: string}, { rejectValue: IError }>(
    "records/blogs/createBlog",
    async (data: {formData: FormData, userId: string}, thunkAPI) => {
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
    async (userId: string, thunkAPI) => {
        const action = await blogApi.getBlogs(userId)

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)

export const createPost = createAsyncThunk<any, {formData: FormData, userId: string}, { rejectValue: IError }>(
    "records/posts/createPost",
    async (data: {formData: FormData, userId: string}, thunkAPI) => {
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
    async (userId: string, thunkAPI) => {
        const action = await postApi.getPosts(userId)

        if (action.status < 200 && 300 <= action.status) {
            return thunkAPI.rejectWithValue(action.data)
        }

        return action.data
    },
)
