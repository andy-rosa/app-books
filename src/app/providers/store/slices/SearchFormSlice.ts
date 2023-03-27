import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MAX_BOOKS_FOR_REQUEST} from "../../../api/app.api";

export type SortType = 'newest' | 'relevance'

export interface BookSearchFormState {
    searchText: string;
    category: string;
    sort: SortType;
    startIndex: number
}

const initialState: BookSearchFormState = {
    searchText: '',
    category: 'all',
    sort: 'relevance',
    startIndex: 0
};

const bookSearchFormSlice = createSlice({
    name: 'bookSearch',
    initialState,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        setSearchCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setSearchSort: (state, action: PayloadAction<SortType>) => {
            state.sort = action.payload;
        },
        setStartIndex: (state, action: PayloadAction<boolean>) => {
            action.payload
                ? state.startIndex += MAX_BOOKS_FOR_REQUEST
                : state.startIndex = 0;
        }
    },
});

export const { setSearchText, setSearchCategory, setSearchSort, setStartIndex } = bookSearchFormSlice.actions;
export const {reducer: bookSearchFormReducer} = bookSearchFormSlice ;
