import { configureStore } from '@reduxjs/toolkit'
import characteristicSlice from './characteristics/characteristicSlice'

export const store = configureStore({
  reducer: {
    characteristic: characteristicSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch