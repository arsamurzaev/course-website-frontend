import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("/courses");

      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  courses: [],
  erorr: null,
  loaded: false,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.erorr = null;
        state.loaded = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.erorr = null;
        state.courses.push(action.payload);
        state.loaded = false;
        console.log(state.courses);
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.erorr = action.payload;
        state.loaded = false;
      });
  },
});

export default coursesSlice.reducer;
