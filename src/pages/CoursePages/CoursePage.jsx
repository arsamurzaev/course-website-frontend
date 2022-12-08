import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courses/coursesSlice";
import CourseCard from "./CourseCard";
import styles from "./CoursePage.module.css";

function CoursePage({ description }) {
  const [priceOutput, setPriceOutput] = useState();
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses)


  
  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  return (
    <div className={styles.course}> 
      <div className={styles.main_categ}>Выберите категорию курсов</div>

<div className={styles.categories}>
  <button className={styles.circle}>IT</button>
  <button className={styles.circle}>Спорт</button>
  <button className={styles.circle}>Творчество</button>
</div>

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
  <div className={styles.price_teg}>
    <div className={styles.price}>Цена</div>
    <hr className={styles.siz} />
    от
    <input
      className={styles.inp_price}
      type="number"
      step="0.01"
      min="0"
      placeholder="0,00"
    />
    до
    <input
      className={styles.inp_price}
      type="number"
      step="0.01"
      min="0"
      placeholder="0,00"
    />
  </div>
</div>
      {
        courses.courses.map(course => {
          console.log(course);
        return (
        <CourseCard
          description={course.description}
          name={course.name}
          online={course.online}
          price={course.price}
        />
        )
      })
      }
    </div>
  );
}

export default CoursePage;
