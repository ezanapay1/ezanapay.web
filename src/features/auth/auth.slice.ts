import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./api/register";

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending.type]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [registerUser.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.success = true;
        },
        [registerUser.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export default authSlice.reducer;