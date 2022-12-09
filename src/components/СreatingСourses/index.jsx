import React from "react";
import styles from "./Courses.module.scss";

const CreatingCourses = () => {
  return (
    <div className={styles.coursesBlock}>
      <div className={styles.course}>
        <h1>Дмитрий Валак</h1>

        <div className={styles.nameCourse}>
          <div className={styles.nameInput}>
            <p>Название курса</p>
            <input type="text" />
          </div>
          <div className={styles.categorisInput}>
            <p>Выберите категорию курсов</p>
            <select name="" id="">
              <option value="it">It</option>
              <option value="sport">Спорт</option>
              <option value="creation">Творчество</option>
            </select>
          </div>
        </div>

        <div className={styles.courseDescription}>
          <p>Описание курса</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.creatingImgPrice}>
          <div className={styles.price}>
            <p>Онлайн</p>{" "}
            <select name="" id="">
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
          </div>
          <div className={styles.price}>
            <p>Цена</p>
            <input type="text" />
          </div>
          <div className={styles.img}>
            <p>Добавить изображения</p>
            <input type="file" multiple/>
            
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.linkinputOne}>
            <p>Cсылка на учебную группу</p>
            <input type="text" />
          </div>
          <div className={styles.linkInputTwo}>
            <p>место проведения</p>
            <input type="text" />
          </div>
        </div>
        <div className={styles.button}>
        <button>Отправить</button>
        </div>
        
      </div>
    </div>
  );
};

export default CreatingCourses;
