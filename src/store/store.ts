import {Action, combineReducers, configureStore, ThunkAction,} from "@reduxjs/toolkit"
import logger from 'redux-logger'
import dialogsSlice from "@/store/modules/dialogs/dialogsSlice";
import userSlice from "@/store/modules/user/userSlice";
import authSlice from "@/store/modules/auth/authSlice";
import socketMiddleware from "@/store/middlewares/socketMiddleware";

const rootReducer = combineReducers({
    authSlice,
    userSlice,
    dialogsSlice,
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(socketMiddleware),
});

export interface WebsocketActionProps {
    payload: Record<string, any>,
    meta: {
        type: 'subscribe' | 'send',
        namespace: string,
        event: string
    }
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
