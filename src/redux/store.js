import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemSlice'
import companyReducer from './companySlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
    companies: companyReducer
  },
})