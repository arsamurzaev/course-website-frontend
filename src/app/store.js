import { configureStore } from "@reduxjs/toolkit";
import application from "../features/application/applicationSlice";
import users from '../features/users/usersSlice';

const store = configureStore({
  reducer: {
    application,
    users,
  },
});

export default store;
