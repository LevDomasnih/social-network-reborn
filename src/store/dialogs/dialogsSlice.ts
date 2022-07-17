import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDialogByUserId, sendMessage} from "@/store/dialogs/dialogsThunk";

interface initialState {
    dialogs: {
        id: string,
        status: string,
        userId: string,
        users: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        }[],
        lastMessage: {
            id: string,
            text: string,
            ownerId: string,
            createAt: Date,
            updateAt: Date
        }
    }[],
    activeDialog: {
        id: string,
        status: string,
        user: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        },
        users: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        }[],
        messages: {
            id: string,
            text: string,
            ownerId: string,
            createAt: Date,
            updateAt: Date
        }[]
    } | null
}

const initialState: initialState = {
    dialogs: [],
    activeDialog: null,
}

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setDialogs: (state, data: PayloadAction<any>) => ({
            ...state,
            dialogs: data.payload
        }),
        setActiveDialogs: (state, data: PayloadAction<any>) => ({
            ...state,
            activeDialog: data.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(getDialogByUserId.fulfilled, (state, action) => ({
            ...state,
            activeDialog: action.payload
        }))
        builder.addCase(getDialogByUserId.pending, (state, action) => {
        })
        builder.addCase(getDialogByUserId.rejected, (state, action) => {
        })
        builder.addCase(sendMessage.fulfilled, (state, action) => {
        })
        builder.addCase(sendMessage.pending, (state, action) => {
        })
        builder.addCase(sendMessage.rejected, (state, action) => {
        })
    }
})

export const {
    setDialogs,
    setActiveDialogs,
} = dialogsSlice.actions
export default dialogsSlice.reducer
