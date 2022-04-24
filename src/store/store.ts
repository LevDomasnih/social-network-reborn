import {
    Action, combineReducers,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit"
import authSlice from "./auth/authSlice"
import logger from 'redux-logger'
import profileSlice from "./profile/profileSlice";

const rootReducer = combineReducers({
    authSlice,
    profileSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
