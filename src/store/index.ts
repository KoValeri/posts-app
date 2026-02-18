import { configureStore } from '@reduxjs/toolkit'
import reactionsReducer from './reactionsSlice'

export const store = configureStore({
  reducer: {
    reactions: reactionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
