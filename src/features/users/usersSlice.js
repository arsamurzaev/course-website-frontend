import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (id, thunkAPI) => {
    try {
      const res = await fetch("/users/" + id);

      const user = await res.json();

      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/users');
      const users = await response.json()
      return thunkAPI.fulfillWithValue(users)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.toString())
    }
  }
)

export const editUser = createAsyncThunk(
  "users/edit",
  async (reqData, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", reqData.avatar);
      const res = await fetch("/users/uploadAvatar", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const { nickname, email, password, id } = reqData.userData;

      const response = await fetch("users/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.path,
          nickname,
          email,
          password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const user = await response.json();

      return thunkAPI.fulfillWithValue(user);
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  user: [],
  error: null,
  loader: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loader = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loader = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(editUser.pending, (state, action) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loader = false;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loader = false;
      });
  },
});

export default usersSlice.reducer;
