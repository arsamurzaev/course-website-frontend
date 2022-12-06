
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./Main/MainPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import RegProfile from "../pages/RegProfile/RegProfile";

// import CurrentCoursePage from "../pages/currentCoursePage/CurrentCoursePage";


const App = () => {
  return (
    <>
      <Header />
      <RegisterPage />
      <RegProfile />
      <MainPage />
      <Footer />
      
    </>
  );
};


export default App;
