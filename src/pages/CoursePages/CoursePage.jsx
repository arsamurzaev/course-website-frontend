import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courses/coursesSlice";
import PreloaderPage from "../../preloader/PreloaderPage";
import CourseCard from "./CourseCard";
import styles from "./CoursePage.module.css";

function CoursePage({ description }) {
  const [priceOutput, setPriceOutput] = useState();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const loading = useSelector((state) => state.courses.loading);


  useEffect(() => {
    window.scroll(0, 0);
  });

  if (loading) return <PreloaderPage />;

  return (
    <div className={styles.course}>

      {/* <div className={styles.main_categ}>Выберите категорию курсов</div>

      <div className={styles.categories}>
        <button className={styles.circle}>IT</button>
        <button className={styles.circle}>Спорт</button>
        <button className={styles.circle}>Творчество</button>
      </div> */}

      <div className={styles.inp_price_categ}>
        <div className={styles.search_teg}>
          <div className={styles.name_teg}>Поиск по тегам</div>
          <hr className={styles.siz} />
          <input
            className={styles.inp_teg}
            type="text"
            placeholder="введите название.."
          />
        </div>

      </div>
      {courses.courses.map((course) => {
        return (
          <CourseCard
            key={course._id}
            id={course._id}
            description={course.description}
            name={course.name}
            online={course.online}
            price={course.price}
            image={course.image[0]}
          />
        );
      })}
    </div>
  );
}

export default CoursePage;
