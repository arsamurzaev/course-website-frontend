import { configureStore } from "@reduxjs/toolkit";
import application from "../features/application/applicationSlice";
import courses from "../features/courses/coursesSlice";

import users from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    application,
    courses,
    users,
  },
});

export default store;
