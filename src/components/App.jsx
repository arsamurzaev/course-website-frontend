import Header from "./Header";
import MainPage from "./Main/MainPage";
import ProfilePage from "../pages/ProfilePages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import CoursePage from "../pages/CoursePages/CoursePage";
import CurrentCoursePage from "../pages/currentCoursePage/CurrentCoursePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { useSelector } from "react-redux";
import SnowBack from "./Background/Snow";
import PreloaderPage from "../preloader/PreloaderPage";
import Footer from "./Footer";

const App = () => {
  const token = useSelector((state) => state.application.token);

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
        <Route path="/course" element={<CurrentCoursePage />} />
        <Route path="/auth" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
