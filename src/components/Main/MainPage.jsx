import React from "react";
import styles from "./MainPage.module.scss";
import mainImage from "../../images/Bitmap.png";
import Group from "../../images/Group.png";
import it from "../../images/icon-it.png";
import sport from "../../images/icon-sport.png";
import creativity from "../../images/icon-creativity.png";
import avatar from "../../images/avatar.png";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const MainPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.discripchen}>
          <img src={mainImage} alt="no" />
          <div className={styles.quote}>
            Терпение и учение делают людей великими,
            <br /> а великие люди — опора будущего.
          </div>
        </div>

        <div className={styles.group}>
          <img src={Group} alt="" />
        </div>

        <div className={styles.numberCourses}>
          <p className={styles.h1}>На нашей платформе более 302 курсов</p>
          <div className={styles.icons}>
            <div>
              <img src={it} alt="/" />
              <p>IT</p>
              <p>Развивайте в сфере айти</p>
              <p>
                у нас более <br /> 120 курсов
              </p>
            </div>
            <div>
              <img src={sport} alt="/" />
              <p>Спорт</p>
              <p>Развивайте в сфере Спорта</p>
              <p>
                у нас более <br /> 120 курсов
              </p>
            </div>
            <div>
              <img src={creativity} alt="/" />
              <p>Творчество</p>
              <p>Развивайте в сфере Творчества</p>
              <p>
                у нас более <br /> 120 курсов
              </p>
            </div>
          </div>

          <Link to="/">
            <button className={styles.more}>Подробнее</button>
          </Link>
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
