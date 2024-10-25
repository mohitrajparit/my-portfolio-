// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../features/navbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    // other reducers if needed
  },
});
