import Course from "./Course";
import bg from "../../image/bg-course.jpg";
import styles from "./myCourses.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../../features/courses/coursesSlice";

const MyCourses = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const id = useSelector((state) => state.application.userId);
  const path = useSelector((state) => state.users.user.avatar);
  const courses = useSelector((state) => state.courses.courses);

  
  useEffect(() => {
      dispatch(fetchCourses);
    }, [dispatch]);
    
    console.log(courses);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.bg}>
          <img src={bg} alt="" />
        </div>
        <div className={styles.avatar}>
          <img src={path} alt="" />
        </div>
        <div className={styles.name}>{user.nickname}</div>
        <div className={styles.instagram}>
          <a href={user.social}>
            <img src="" alt="" />
          </a>
        </div>
        <div className={styles.description}>{user.description}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.over}>
          <div className={styles.title}>Мои курсы</div>
          <button>Создать курс</button>
        </div>
        <div className={styles.courses}>
          <Course />
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
