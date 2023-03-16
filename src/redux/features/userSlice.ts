import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../api/types";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  initialState,
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
