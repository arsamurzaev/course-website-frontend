import React, { useEffect } from "react";
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

      {/* <div className={styles.main_categ}>Выберите категорию курсов</div>

      <div className={styles.categories}>
        <button className={styles.circle}>IT</button>
        <button className={styles.circle}>Спорт</button>
        <button className={styles.circle}>Творчество</button>
      </div> */}

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
          />
        </div>
      <div>Курсы
      <div className={styles.li}>Выбрать курс
        <div className={styles.dropdown}>
          <a className={styles.drop_link} href='*'>IT</a>
          <a className={styles.drop_link} href='*'>Спорт</a>
          <a className={styles.drop_link} href='*'>Творчество</a>
        </div>
        </div>
      </div>
      
        <div className={styles.price_teg}>
          <div className={styles.price}>Цена</div>
          <hr className={styles.siz} />
          от
          <input
            // value={search} 
            className={styles.inp_price}
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
          // onChange={(e) => setSearch(e.target.value)} 
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
      {courses.courses.map((course) => {
        return (
          <CourseCard
            description={course.description}
            name={course.name}
            online={course.online}
            price={course.price}
            tags={course.tags}
          />
        );
      })}
    </div>
  );
}

export default CoursePage;