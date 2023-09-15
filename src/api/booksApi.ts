import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IBook} from "@/data/types";


export const booksApi = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/books"
    }),
    endpoints: (builder) => ({
        getBooksBySubject: builder.query<IBook[], {subject: string, pageIndex: number, maxResults: number}>({
            query({subject, pageIndex, maxResults}): string {
                const params = new URLSearchParams();
                params.append("q", `"subject:${subject}"`);
                params.append("startIndex", pageIndex.toString());
                params.append("maxResults", maxResults.toString());
                return `?${params.toString()}`
            }
        }),
    }),
});

export const {useGetBooksBySubjectQuery} = booksApi;

// https://redux-toolkit.js.org/rtk-query/overview