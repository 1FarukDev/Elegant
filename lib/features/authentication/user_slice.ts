import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define an interface for the user object
interface User {
  phone: string | null;
  email: string;
  id: string;
  // Add more properties as needed
}

// Define an interface for the user profile object
interface UserProfile {
  email: string;
  address?: string;
  phone: string | null;
  // Add more properties as needed
}

// Define an interface for the user state
export interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  userProfile: UserProfile | null; // Add userProfile to the state
}

// Define the initial state for the user slice
const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  token: null,
  userProfile: null, // Initialize userProfile as null
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
      state.userProfile = null; // Clear userProfile on logout
    },
    saveUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
});

// Export actions
export const { loginSuccess, logout, saveUserProfile } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
