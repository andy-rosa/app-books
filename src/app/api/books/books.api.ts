import {SearchItem, SearchResponse} from "../../../models/types/SearchResponse";
import {appApi, MAX_BOOKS_FOR_REQUEST} from "../app.api";
import {BookSearchFormState} from "../../providers/store/slices/SearchFormSlice";

export const booksApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        searchBooks: build.query<{items: SearchItem[], total: number} , BookSearchFormState>({
            query: (search) => ({
                url: 'v1/volumes',
                params: {
                    q: `${search.category !== 'all'
                        ? `${search.searchText}+subject:${search.category}`
                        : search.searchText}`,
                    startIndex: search.startIndex,
                    orderBy: search.sort,
                    maxResults: MAX_BOOKS_FOR_REQUEST
                }
            }),
            transformResponse: (response: SearchResponse) => ({
                items: response.items, total: response.totalItems
            })
        })
    }),
    overrideExisting: false
})

export const {useLazySearchBooksQuery, useSearchBooksQuery} = booksApi
