import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const MAX_BOOKS_FOR_REQUEST = 30
const BASE_URL = 'https://www.googleapis.com/books/'

export const appApi = createApi({
    reducerPath: 'google/books',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    endpoints: () => ({})
})
