import styles from "./CurrentCourse.module.css";
import UserCard from "../../components/userCard/UserCard";

const CurrentCourse = ({ filterCourse }) => {
    const name = filterCourse.name
    const image = filterCourse.image
    console.log(name, image);
  return (
    <div className={styles.page}>
      <UserCard />
      <div className={styles.info}>
        <div className={styles.frame}>
          <div className={styles.text_rating_of_course}>Рейтинг курса</div>
          <div className={styles.title_block}>
            <h2 className={styles.title}>{name}</h2>
          </div>
          <div className={styles.text}>
            <span>
              <div className={styles.img_block}>
                {image.map((img) => <img src={img} />)}
              </div>
              {filterCourse.description}
            </span>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>Дизайн</span>
            <span className={styles.tag}>Создание сайта</span>
            <span className={styles.tag}>СММ</span>
            <span className={styles.tag}>Онлайн</span>
          </div>

          <div className={styles.enroll_block}>
            {/* Continue here */}
            <span className={styles.enroll_button}>Записаться на курс</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;
