// src/slices/navbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
  },
});

export const { toggleNav } = navbarSlice.actions;

export const selectNavOpen = (state) => state.navbar.navOpen;

export default navbarSlice.reducer;
