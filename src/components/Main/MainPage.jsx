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
            Терпение и учение делают людей великими,
            <br /> а великие люди — опора будущего.
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
            <div className={styles.name_userss}>Асхьаб Бурсакъов</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>Харцоно цӏе тесна хийла хьо ягарх,
Нохчийчоь ца йоьжна, гӏаьттина яха.
Кавказан ткъес хилла, маршонан ага,
Хьан лаьттан сий дина яхь йолчу наха.</div>
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
            <div className={styles.name_userss}>Альви Таксист</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>Какая ночь! Я не могу.
Не спится мне. Такая лунность.
Еще как будто берегу
В душе утраченную юность.

Подруга охладевших лет,
Не называй игру любовью,.</div>
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
            <div className={styles.name_userss}>Элиза Кимчи</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>У лукоморья дуб зелёный;
Златая цепь на дубе том:
И днём и ночью кот учёный
Всё ходит по цепи кругом;
Идёт направо — песнь заводит,
Налево — сказку говорит.
Там чудеса: там леший бродит,.</div>
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
            <div className={styles.name_userss}>Гит Изновр</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>Белая берёза
Под моим окном
Принакрылась снегом,
Точно серебром.

На пушистых ветках
Снежною каймой
Распустились кисти
Белой бахромой..</div>
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
            <div className={styles.name_userss}>Милана Менеджер</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>Снегирь сидит на ветке В розовой жилетке, А дятел в ярко-красной Шапочке атласной. Вдали мелькают сойки — Синие ковбойки.</div>
          </div>
          <div className={styles.feedback}>
            <img src={avatar} alt="/" />
            <div className={styles.name_userss}>Ридван Нохчо</div>
            <div className={styles.time_userss}>оставил 3 дня назад</div>
            <div className={styles.com_users}>Ма Лепа Дашо Малх
            къонахи боцу чу джекшана 
            Еууу Олш Шен кхолш.</div>
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
