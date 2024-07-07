import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define an interface for the user object
interface User {
  phone: string | null;
  email: string;
  id: string;
  // Add more properties as needed
}

// Define an interface for the user profile object
interface UserOtherProfile {
  email?: string;
  address?: string;
  phone?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  display_name?: string | null;
  profile_image?: string | null;
  user_id?: string | null;
  // Add more properties as needed
}

// Define an interface for the user state
export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  userOtherProfile: UserOtherProfile | null; // Add userOtherProfile to the state
}

// Define the initial state for the user slice
const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  token: null,
  userOtherProfile: null, // Initialize userOtherProfile as null
};

// Create a user slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.userOtherProfile = null; // Clear userOtherProfile on logout
    },
    saveUserOtherProfile: (state, action: PayloadAction<UserOtherProfile>) => {
      state.userOtherProfile = action.payload;
    },
  },
});

// Export actions
export const { loginSuccess, logout, saveUserOtherProfile } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
