import { configureStore } from "@reduxjs/toolkit";
import application from "../features/application/applicationSlice";
import courses from "../features/courses/coursesSlice";

const store = configureStore({
  reducer: {
    application,
    courses
  },
});

export default store;
