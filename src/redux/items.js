import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', ()=>{
    return axios
    .get('http://localhost:3000/items')
    .then((response)=>response.data.map((item) => item))
})

const initialState = {
loading:false,
items: [],
error: '',
}

export const counterSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state)=>{
        state.loading = true;
    })
    builder.addCase(fetchItems.fulfilled, (state,action) => {
        state.loading = false
        state.items = action.payload
        state.error = ''
    })
    builder.addCase(fetchItems.rejected, (state,action) => {
        state.loading = false
        state.items = []
        state.error = action.error.message
    })

  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer