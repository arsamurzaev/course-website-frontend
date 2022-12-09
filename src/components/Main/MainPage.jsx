import React, { useEffect } from "react";
import styles from "./MainPage.module.scss";
import mainImage from "../../images/Bitmap.png";
import Group from "../../images/Group.png";
import it from "../../images/icon-it.png";
import sport from "../../images/icon-sport.png";
import creativity from "../../images/icon-creativity.png";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courses/coursesSlice";
import PreloaderPage from "../../preloader/PreloaderPage";

const MainPage = () => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.courses.loading)

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const itLength = courses.filter((item) => item.category === "it").length;

  const sportLength = courses.filter(
    (item) => item.category === "спорт"
  ).length;

  const creativityLength = courses.filter(
    (item) => item.category === "творчество"
  ).length;

  if (loading) return <PreloaderPage/>

  return (
    <>
      <div className={styles.main}>
        <div className={styles.discripchen}>
          <img src={mainImage} alt="no" />
          <div className={styles.quote}>
            Я знаю у тебя все прекрасно
            <br /> у меня в душе все ясно 
            <br /> спасибо тебе за все
            <br /> открыто райское окно
          </div>
        </div>

        <div className={styles.group}>
          <img src={Group} alt="" />
        </div>

        <div className={styles.numberCourses}>
          <p className={styles.h1}>
            На нашей платформе более {courses.length} курсов
          </p>
          <div className={styles.icons}>
            <div>
              <img src={it} alt="/" />
              <p>IT</p>
              <p>Развивайте в сфере айти</p>
              <p>
                у нас более <br /> {itLength} курсов
              </p>
            </div>
            <div>
              <img src={sport} alt="/" />
              <p>Спорт</p>
              <p>Развивайте в сфере Спорта</p>
              <p>
                у нас более <br /> {sportLength} курсов
              </p>
            </div>
            <div>
              <img src={creativity} alt="/" />
              <p>Творчество</p>
              <p>Развивайте в сфере Творчества</p>
              <p>
                у нас более <br /> {creativityLength} курсов
              </p>
            </div>
          </div>

          <button className={styles.more}>
            <Link to="/courses">Подробнее</Link>{" "}
          </button>
        </div>

        <div className={styles.blockFeedback}>
          <p>Отзывы наших преподователей </p>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
          </div>
        </div>

        <div className={styles.blockQuestions}>
          <p className={styles.h1}>Задайте нам вопрос</p>
          <div className={styles.questions}>
            <form>
              <div className={styles.questionsInput}>
                <input type="text" placeholder="Ваш e-mail" />
                <input type="text" placeholder="Текст сообщения" />
              </div>
            </form>
            <button>Отправить</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
