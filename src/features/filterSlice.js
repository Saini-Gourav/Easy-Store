import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFilterData = createAsyncThunk(
  "filter",
  async ({category, token}, { rejectWithValue }) => {
    console.log(token,"slicechekToken")
    try {
      const response = await fetch(
        `http://localhost:5000/get/items/${category}`,
        {
          headers: {
            // Authorization: `Bearer ${token}`,
            authorization: `${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue("Found some error");
    }
  }
);

export const filterSlice = createSlice({
  name: "filterData",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getFilterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilterData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getFilterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default filterSlice.reducer;
