import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getDialogByUserId, sendMessage} from "@/store/modules/dialogs/dialogsThunk";
import {WebsocketActionProps} from "@/store/store";

export const dialogsJoinRoom = createAction<() => WebsocketActionProps>('dialogs/joinRoom', () => {
    return {
        payload: {},
        meta: {
            type: 'send',
            namespace: 'dialogs',
            event: 'joinRoom',
        }
    }
})

export const dialogsSubscribe = createAction<() => WebsocketActionProps>('dialogs/getMessage', () => {
    return {
        payload: {},
        meta: {
            type: 'subscribe',
            namespace: 'dialogs',
            event: 'getMessage'
        }
    }
})

export const dialogsSendMessage = createAction<
    (payload: { text: string, secondOwnerId: string }) => WebsocketActionProps
    >('dialogs/sendMessage', (payload) => {
    return {
        payload,
        meta: {
            type: 'send',
            namespace: 'dialogs',
            event: 'createMessage'
        }
    }
})

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
            createdAt: Date,
            updatedAt: Date
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
            createdAt: Date,
            updatedAt: Date
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

        builder.addCase(dialogsSubscribe, (state, action) => {
            if (state.activeDialog && action.payload.dialogId === state.activeDialog.id) {
                state.activeDialog.messages = [
                    action.payload,
                    ...state.activeDialog.messages,
                ]
            }

            state.dialogs.forEach(d => {
                if (d.id === action.payload.dialogId) {
                    d.lastMessage = action.payload
                }
            })
        })
    }
})

export const {
    setDialogs,
    setActiveDialogs,
} = dialogsSlice.actions
export default dialogsSlice.reducer
