import {createAction, createSlice, PayloadAction, PayloadActionCreator} from "@reduxjs/toolkit";
import {getDialogByUserId, sendMessage} from "@/store/modules/dialogs/dialogsThunk";
import {WebsocketActionProps} from "@/store/store";

export const dialogsRoom = createAction<() => WebsocketActionProps>('dialogs/joinRoom', () => {
    return {
        payload: {},
        meta: {
            type: 'send',
            namespace: 'dialogs',
            event: 'joinRoom',
        }
    }
})

interface DialogsGetMessageResponse {
    dialogId: string,
    ownerId: string,
    id: string,
    text: string,
    createdAt: Date,
    updatedAt: Date
}

export const dialogsGetMessage = createAction<(type?: 'subscribe' | 'unsubscribe') => WebsocketActionProps>('dialogs/getMessage', (type = 'subscribe') => {
    return {
        payload: {},
        meta: {
            type,
            namespace: 'dialogs',
            event: 'getMessage'
        }
    }
})

interface DialogsGetNewDialogResponse {
    id: string,
    status: string,
    info: {
        id: string,
        image: string | null,
        name: string,
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
    }[],
}

export const dialogsGetNewDialog = createAction<(type?: 'subscribe' | 'unsubscribe') => WebsocketActionProps>('dialogs/getNewDialog', (type = 'subscribe') => {
    return {
        payload: {},
        meta: {
            type,
            namespace: 'dialogs',
            event: 'getNewDialog'
        }
    }
})

export const dialogsSendMessage = createAction<(payload: { text: string, secondOwnerId: string }) => WebsocketActionProps>('dialogs/sendMessage', (payload) => {
    return {
        payload,
        meta: {
            type: 'send',
            namespace: 'dialogs',
            event: 'sendMessage'
        }
    }
})

interface initialState {
    dialogs: {
        id: string,
        status: string,
        info: {
            id: string,
            image: string | null,
            name: string,
        },
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
        info: {
            id: string,
            image: string | null,
            name: string,
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

        builder.addCase(dialogsGetMessage.type, (state, action: PayloadAction<DialogsGetMessageResponse, "dialogs/getMessage">) => {
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

        builder.addCase(dialogsGetNewDialog.type, (state, action: PayloadAction<DialogsGetNewDialogResponse, "dialogs/getNewDialog">) => {
            if (state.activeDialog && state.activeDialog.info.id === action.payload.info.id) {
                state.activeDialog = action.payload
            }

            state.dialogs.push({
                lastMessage: action.payload.messages[0],
                users: action.payload.users,
                status: action.payload.status,
                id: action.payload.id,
                info: action.payload.info
            })
        })
    }
})

export const {
    setDialogs,
    setActiveDialogs,
} = dialogsSlice.actions
export default dialogsSlice.reducer
