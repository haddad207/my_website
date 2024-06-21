import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import agent from "../../app/api/agent";
import { router } from "../../router/Route";
import { FieldValues } from "react-hook-form";

interface AccountState {
  user: User | null;
}

const initialState: AccountState = {
  user: null,
};

export const singInUser = createAsyncThunk<User, FieldValues>(
  "user/loginUser",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const user = await agent.Account.login(data);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

export const fetchCurrentUser = createAsyncThunk<User>(
  "account/getCurrentUser",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem("user")!)));
    try {
      const user = await agent.Account.currentUser();
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: () => {
      if (!localStorage.getItem("user")) return false;
    },
  }
);

export const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      router.navigate("/");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(singInUser.fulfilled, fetchCurrentUser.fulfilled),
      (state, action) => {
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      isAnyOf(singInUser.rejected, fetchCurrentUser.rejected),
      (_state, action) => {
        console.log(action.payload);
      }
    );
  },
});

export const { signOut, setUser } = accountSlice.actions;
