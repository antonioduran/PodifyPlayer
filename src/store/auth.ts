import {
  /*createSelector,*/ createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from ".";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  avatar?: string;
  followers: number;
  followings: number;
}

interface AuthState {
  profile: UserProfile | null;
  loggedIn: boolean;
  busy: boolean;
}

const initialState: AuthState = {
  profile: null,
  loggedIn: false,
  busy: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfile(AuthState, { payload }: PayloadAction<UserProfile | null>) {
      AuthState.profile = payload;
    },
    updateLoggedInState(AuthState, { payload }) {
      AuthState.loggedIn = payload;
    },
    updateBusyState(AuthState, { payload }: PayloadAction<boolean>) {
      AuthState.busy = payload;
    },
  },
});

export const { updateLoggedInState, updateProfile, updateBusyState } =
  slice.actions;

export const getAuthState = (state: RootState) => state.auth; // Do not remove this

export default slice.reducer;
