import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  courses: [],
  error: false,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetch",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("/courses");
      const courses = await res.json();

      return thunkAPI.fulfillWithValue(courses);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "/courses/fetch",
  async (reqData, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("myFiles", reqData.img);
      const res = await fetch("/upload-multiple", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const {
        name,
        price,
        description,
        location,
        social,
        online,
        category,
        tags,
        userId,
      } = reqData.courseData;
      const response = await fetch("/course", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          description,
          location,
          social,
          isOwner: userId,
          online,
          category,
          image: data,
          tags,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const course = await response.json();

      return thunkAPI.fulfillWithValue(course);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default coursesSlice.reducer;
