import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUsers", async (args,{rejectWithValue}) => {
    // const response = await fetch("https://fakestoreapi.com/products");
    const response = await fetch("http://localhost:5000/get");
    
    try{
        const result = response.json();
        return result;
    }
    catch(error)
    {
        return rejectWithValue("Found some error");
    }
})
// console.log(getAllData,"FakeApi")

export const gitUser = createSlice({
    name: "gitUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getAllData.pending]: (state) => {
            state.loading = true;
        },
        [getAllData.fulfilled]: (state,action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAllData.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default gitUser.reducer;