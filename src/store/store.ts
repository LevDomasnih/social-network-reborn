import {Action, combineReducers, configureStore, ThunkAction,} from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import logger from 'redux-logger'
import userSlice from "./user/userSlice";
import dialogsSlice from "@/store/dialogs/dialogsSlice";

const rootReducer = combineReducers({
    authSlice,
    userSlice,
    dialogsSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
