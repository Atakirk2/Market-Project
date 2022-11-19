import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanies = createAsyncThunk(
  "companies/fetchCompanies",
  () => {
    return axios
      .get("http://localhost:3000/companies")
      .then((response) => response.data.map((item) => item));
  }
);

const initialState = {
  loading: false,
  companyList: [],
  error: "",
  checkedCompanies: [],
  filteredCompanies: [],
};

export const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    searchFilter: (state, action) => {
      if (action == "") {
        state.filteredCompanies = state.companyList;
        return;
      }
      console.log(action.payload);
      state.filteredCompanies = state.companyList.filter((company) => {
        return company.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
    checkCompany: (state, action) => {
        state.checkedCompanies.push(action.payload);
    },
    uncheckCompany: (state,action) => {
        state.checkedCompanies.splice(state.checkedCompanies.indexOf(action.payload),1);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.companyList = action.payload;
      state.filteredCompanies = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      state.loading = false;
      state.companyList = [];
      state.error = action.error.message;
    });
  },
});

export const { searchFilter, checkCompany, uncheckCompany } = companySlice.actions;

export default companySlice.reducer;
