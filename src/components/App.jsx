import Header from "./Header";
import MainPage from "./Main/MainPage";
import ProfilePage from "../pages/ProfilePages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import CoursePage from "../pages/CoursePages/CoursePage";
import CurrentCoursePage from "../pages/currentCoursePage/CurrentCoursePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import SnowBack from "./Background/Snow";
import MyCourses from "../pages/MyCourses/MyCourses";
import TeacherPage from "../pages/TeachersPage/TeachersPage";
import { useEffect } from "react";
import { fetchUser } from "../features/users/usersSlice";
import { fetchCourses } from "../features/courses/coursesSlice";

const App = () => {
  const token = useSelector((state) => state.application.token);
  const id = useSelector((state) => state.application.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchCourses())
    window.scroll(0, 0)
  }, [dispatch]);
  if (!token) {
    return (
      <>
        <SnowBack />
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Navigate to="/auth" />} />
        </Routes>
      </>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/course/:id" element={<CurrentCoursePage />} />
        <Route path="/auth" element={<Navigate to="/" />} />
        <Route path="/my-courses" element={<MyCourses />}></Route>
        <Route path="/teachers" element={<TeacherPage />} />
      </Routes>
    </>
  );
};

export default App;
