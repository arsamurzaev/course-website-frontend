import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courses/coursesSlice";
import PreloaderPage from "../../preloader/PreloaderPage";
import CourseCard from "./CourseCard";
import styles from "./CoursePage.module.css";

function CoursePage({ description }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);
  const [search, setSearch] = useState("");
 

  console.log(courses);

  let filterName = courses.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
  });

  if (loading) return <PreloaderPage />;

  return (
    <div className={styles.course}>
      <div className={styles.inp_price_categ}>
        <div className={styles.search_teg}>
          <div className={styles.name_teg}>Поиск по названию курса</div>
          <hr className={styles.siz} />
          <input
            className={styles.inp_teg}
            type="text"
            placeholder="введите название.."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
       
      </div>
      {filterName.map((course) => {
        console.log(course);
        return (
          <CourseCard
            description={course.description}
            name={course.name}
            online={course.online}
            price={course.price}
          />
        );
      })}
    </div>
  );
}

export default CoursePage;
