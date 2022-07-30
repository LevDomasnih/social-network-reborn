import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    user: {
        id: string,
        avatar: string | null,
        lastName: string,
        firstName: string,
    },
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
    userId: string | null,
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
    } | null,
    messagesPush: {
        id: string,
        text: string,
        user: {
            id: string,
            avatar: string | null,
            lastName: string,
            firstName: string
        },
        createdAt: Date,
        updatedAt: Date
    }[]
}

const initialState: initialState = {
    userId: null,
    dialogs: [],
    activeDialog: null,
    messagesPush: [],
}

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setUserId: (state, data: PayloadAction<string> ) => ({
            ...state,
            userId: data.payload
        }),
        setDialogs: (state, data: PayloadAction<initialState['dialogs']>) => ({
            ...state,
            dialogs: data.payload
        }),
        setActiveDialogs: (state, data: PayloadAction<initialState['activeDialog']>) => ({
            ...state,
            activeDialog: data.payload
        }),
        deleteMessagePushById: (state, data: PayloadAction<string>) => ({
            ...state,
            messagesPush: state.messagesPush.filter(message => message.id !== data.payload)
        }),
        deleteMessagePushByUserId : (state, data: PayloadAction<string>) => ({
            ...state,
            messagesPush: state.messagesPush.filter(message => message.user.id !== data.payload)
        }),
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
                    {
                        id: action.payload.id,
                        ownerId: action.payload.user.id,
                        updatedAt: action.payload.updatedAt,
                        text: action.payload.text,
                        createdAt: action.payload.createdAt
                    },
                    ...state.activeDialog.messages,
                ]
            }

            state.dialogs.forEach(d => {
                if (d.id === action.payload.dialogId) {
                    d.lastMessage = {
                        id: action.payload.id,
                        ownerId: action.payload.user.id,
                        updatedAt: action.payload.updatedAt,
                        text: action.payload.text,
                        createdAt: action.payload.createdAt
                    }
                }
            })

            if ((!state.activeDialog || (state.activeDialog && action.payload.dialogId !== state.activeDialog.id)) && action.payload.user.id !== state.userId) {
                state.messagesPush = [
                    ...state.messagesPush,
                    {
                        id: action.payload.id,
                        user: action.payload.user,
                        updatedAt: action.payload.updatedAt,
                        text: action.payload.text,
                        createdAt: action.payload.createdAt
                    },
                ]
            }
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
    setUserId,
    deleteMessagePushById,
    deleteMessagePushByUserId,
} = dialogsSlice.actions
export default dialogsSlice.reducer
