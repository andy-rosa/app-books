import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {bookSearchFormReducer} from "./slices/SearchFormSlice";
import {appApi} from "../../api/app.api";

const rootReducer = combineReducers({
    [appApi.reducerPath]: appApi.reducer,
    bookSearchForm: bookSearchFormReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
