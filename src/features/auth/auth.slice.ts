import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./api/register";
import { userLogin } from "./api/login";

interface AuthState {
  loading: boolean;
  userInfo: Record<string, any>; // Update the type according to your userInfo structure
  userToken: string | null;
  error: any; // Update the type according to the expected error structure
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userInfo = action.payload.userDetails;
        state.userToken = action.payload.userToken;
      })
      .addCase(userLogin.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
