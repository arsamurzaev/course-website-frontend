import Header from "./Header";
import MainPage from "./Main/MainPage";
import ProfilePage from "../pages/ProfilePages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import CoursePage from "../pages/CoursePages/CoursePage";
import CurrentCoursePage from "../pages/currentCoursePage/CurrentCoursePage";
import AuthPage from "../pages/AuthPage/AuthPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


const App = () => {
  return (
    <>
    {/* Header */}
      <Header />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/course" element={<CurrentCoursePage />} />
      </Routes>
    </>
  );
};

export default App;
