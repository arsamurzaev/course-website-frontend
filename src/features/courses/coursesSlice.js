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
      formData.append("myFiles", reqData.img[0]);
      formData.append("myFiles", reqData.img[1]);
      formData.append("myFiles", reqData.img[2]);
      formData.append("myFiles", reqData.img[3]);
      formData.append("myFiles", reqData.img[4]);
      const res = await fetch("/upload-multiple", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log(data);

      const {
        name,
        price,
        description,
        location,
        social,
        online,
        category,
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
      })

      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.loading = false;
        console.log(state.courses);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default coursesSlice.reducer;
