import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store/store";

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setThemeMode } = ThemeSlice.actions;
export const getThemeMode = (state: RootState) => state.theme.darkMode;
export default ThemeSlice.reducer;
