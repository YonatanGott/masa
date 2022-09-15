import { configureStore } from '@reduxjs/toolkit'
import mapReducer from './map/mapSlice'
import { trucksApi } from '_api/trucks.api'

export const store = configureStore({
    reducer: {
        map: mapReducer,
        [trucksApi.reducerPath]: trucksApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(trucksApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

