import {appApi} from "../app.api";
import {SearchItem} from "../../../models/types/SearchResponse";

export const bookApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        searchBook: build.query<SearchItem, string>({
            query: (id) => ({
                url: `v1/volumes/${id}`,
            }),
        })
    }),
    overrideExisting: false
})

export const {useSearchBookQuery, useLazySearchBookQuery} = bookApi
