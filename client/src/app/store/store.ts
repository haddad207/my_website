import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlice } from "../../Header/headerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../account/accountSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    accout: accountSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
