import { configureStore } from "@reduxjs/toolkit";
import application from "../features/application/applicationSlice";
const store = configureStore({
  reducer: {
    application,
  },
});

export default store;
