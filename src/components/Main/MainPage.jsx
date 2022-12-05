import React from "react";
import Description from "../Description";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <>
     <div className={styles.main}>
      <div className={styles.description}>
        <ul>
          <li>
            PROXIMA - это площадка для авторов курсов благодаря которой дается
            возможность разместить свои курсы и.т.д
          </li>
        </ul>
      </div>
      <div className={styles.allСourses}>
        <ul>
          <li>Здесь будет информация о количестве всех курсов на сайте</li>
        </ul>
        <div className={styles.certainCourses}>
          <div>иконка и кол-во курсов по айти</div>
          <div>иконка и кол-во курсов по твочеству</div>
          <div>иконка и кол-во курсов по спорту</div>
        </div>
      </div>
    </div>
    <Description/>
    </>
   
  );
};

export default MainPage;
