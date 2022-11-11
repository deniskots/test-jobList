import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {JobsModel} from "../models/JobsModel";
import {RootState} from "../store/store";
import {PAGE_SIZE} from "../consts";

interface JobsParams {

}


export const jobsApi = createApi({
    reducerPath: 'jobsApi',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'https://api.json-generator.com/templates/ZM1r0eic3XEy',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState)
            if (token) {
                headers.set('authorization', `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        fetchAllJobs: builder.query<JobsModel[], any>({
            query: () => ({
                url: '/data',
                method: 'GET',

            }),
        }),
    }),
})
