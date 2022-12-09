import Course from "./Course";
import bg from "../../image/bg-course.jpg";
import styles from "./myCourses.module.scss";
import { useDispatch, useSelector } from "react-redux";

const MyCourses = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const id = useSelector((state) => state.application.userId);
  const path = useSelector((state) => state.users.user.avatar);
  const myCourses = useSelector((state) =>
    state.courses.courses.filter((course) => course.isOwner === id)
  );

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
        {user.social && (
          <div className={styles.instagram}>
            <a href={user.social}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
                alt=""
              />
            </a>
          </div>
        )}
        <div className={styles.description}>{user.description}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.over}>
          <div className={styles.title}>Мои курсы</div>
          <button>Создать курс</button>
        </div>
        <div className={styles.courses}>
          {myCourses.map((course) => (
            <Course
              description={course.description}
              name={course.name}
              online={course.online}
              price={course.price}
              img={course.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
