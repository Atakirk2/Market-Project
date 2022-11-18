import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './items'
export const store = configureStore({
  reducer: {
    items: itemReducer
  },
})