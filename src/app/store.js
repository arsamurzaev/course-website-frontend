import { configureStore } from "@reduxjs/toolkit";
import application from "../features/application/applicationSlice";
import users from '../features/users/usersSlice';
import courses from '../features/courses/coursesSlice';

const store = configureStore({
  reducer: {
    application,
    users,
    courses,
  },
});

export default store;
