import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Courses.module.scss";
import { addPost } from "../../features/courses/coursesSlice";

const CreatingCourses = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [social, setSocial] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [img, setImg] = useState("");

  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(addPost({ img, courseData: {

    } }));
  });

  return (
    <form className={styles.coursesBlock} encType="multipart/form-data">
      <div className={styles.course}>
        <h1>{user.nickname}</h1>

        <div className={styles.nameCourse}>
          <div className={styles.nameInput}>
            <p>Название курса</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.categorisInput}>
            <p>Выберите категорию курсов</p>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            ></input>
          </div>
        </div>

        <div className={styles.courseDescription}>
          <p>Описание курса</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.creatingImgPrice}>
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
    </form>
  );
};

export default CreatingCourses;
