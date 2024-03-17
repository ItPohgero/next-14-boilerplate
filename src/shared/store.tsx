import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/shared/slice/global'

export const store = configureStore({
    reducer: {
        globalReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
