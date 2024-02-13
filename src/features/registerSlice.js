import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("registerUser", async (data,{rejectWithValue})=>{
    console.log('data-post',data)
    const response = await fetch("http://localhost:5000/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body : JSON.stringify(data)
        body : JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password
        })

    });
    try{
        const result = await response.json();
        return result;
    }
    catch(error) {
        return rejectWithValue(error);
    }
})

export const userRegister = createSlice({
    name: 'userRegister',
    initialState: {
        userRegister: [],
        loading: false,
        error: null,
    },
    extraReducers : {
        [registerUser.pending]: (state) => {
            state.loading = true;
        },
        [registerUser.fulfilled]: (state,action) => {
            state.loading = false;
            state.userRegister.push(action.payload)
        },
        [registerUser.rejected]: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
    })

export default userRegister.reducer;