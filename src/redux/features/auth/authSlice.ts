import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../../types/user.types";

type TUserInitialState = {
   token: string | null;
   user: TUser | null;
};

const initialState: TUserInitialState = {
   token: null,
   user: null,
};

const authSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setToken: (state, action: PayloadAction<string>) => {
         state.token = action.payload;
      },
      setUser: (state, action: PayloadAction<TUser>) => {
         state.user = action.payload;
      },
      logOutUser: (state) => {
         state.token = null;
         state.user = null;
      },
   },
});

export const { setToken, setUser, logOutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
