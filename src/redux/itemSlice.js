import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("items/fetchItems", () => {
  return axios
    .get("http://localhost:3000/items")
    .then((response) => response.data.map((item) => item));
});

const initialState = {
  loading: false,
  items: [],
  error: "",
  filteredItems: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    lowToHigh: (state) => {
      state.items.sort((a, b) => a.price - b.price);
    },
    highToLow: (state) => {
      state.items.sort((a, b) => b.price - a.price);
    },
    oldToNew: (state) => {
      state.items.sort((a, b) => b.added - a.added);
    },
    newToOld: (state) => {
      state.items.sort((a, b) => a.added - b.added);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.filteredItems = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export const { lowToHigh, highToLow, oldToNew, newToOld } = itemSlice.actions;

export default itemSlice.reducer;
