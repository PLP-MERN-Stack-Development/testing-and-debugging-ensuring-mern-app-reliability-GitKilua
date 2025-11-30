import { configureStore } from '@reduxjs/toolkit';
import bugsReducer from './bugSlice';
// Add user reducer if needed later (e.g., for auth state)

export const store = configureStore({
  reducer: {
    bugs: bugsReducer,
    // user: userReducer, // Uncomment if adding user state
  },
});

export default store;
