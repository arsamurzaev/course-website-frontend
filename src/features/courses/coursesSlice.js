import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    courses: [],
    error: false,
}


export const fetchCourses = createAsyncThunk('courses/fetch', async (data, thunkAPI) => {
    try {
        const res = await fetch('/courses');
        const courses = await res.json();

        return thunkAPI.fulfillWithValue(courses);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.courses = action.payload
                state.loading = false
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default coursesSlice.reducer;