import { ITruck } from "_types/Truck";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryOptions } from "_utils/rtkQuery.utils";

export const trucksApi = createApi({
    reducerPath: 'trucksApi',
    baseQuery: fetchBaseQuery(baseQueryOptions),
    tagTypes: ['Trucks', 'Truck'],
    endpoints: (builder) => ({
        getTrucks: builder.query<ITruck[], null>({
            query: () => '/trucks',
            providesTags: ['Trucks']
        }),
        getTruckById: builder.query<ITruck, string>({
            query: (id: string) => `/trucks/${id}`,
            providesTags: ['Truck']
        }),
    })
})

export const {
    useGetTrucksQuery,
    useGetTruckByIdQuery
} = trucksApi