import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './itemSlice'
import companyReducer from './companySlice'
import basketReducer from './basketSlice'

export const store = configureStore({
  reducer: {
    items: itemReducer,
    companies: companyReducer,
    basket: basketReducer
  },
})