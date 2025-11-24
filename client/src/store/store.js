import { configureStore } from '@reduxjs/toolkit';
import bugsReducer from './bugsSlice';
// Add user reducer if needed later (e.g., for auth state)

export default configureStore({
  reducer: {
    bugs: bugsReducer,
    // user: userReducer, // Uncomment if adding user state
  },
});