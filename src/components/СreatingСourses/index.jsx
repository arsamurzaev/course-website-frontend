import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/courses/coursesSlice";
import styles from "./Courses.module.scss";

const CreatingCourses = () => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [social, setSocial] = useState("");
  const [online, setOnline] = useState(false);
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState([]);

  useEffect(() => {
    dispatch(
      addPost({
        img,
        courseData: {
          name,
          price,
          description,
          location,
          social,
          online,
          category,
          userId: user._id,
        },
      })
    );
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        img,
        courseData: {
          name,
          price,
          description,
          location,
          social,
          online,
          category,
          userId: user._id,
        },
      })
    );
    setName("");
  };

  return (
    <form
      className={styles.coursesBlock}
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <div className={styles.course}>
        <h1>Дмитрий Валак</h1>

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
            <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
              <option value="it">It</option>
              <option value="спорт">Спорт</option>
              <option value="творчество">Творчество</option>
            </select>
          </div>
        </div>

        <div className={styles.courseDescription}>
          <p>Описание курса</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.creatingImgPrice}>
          <div className={styles.price}>
            <p>Онлайн</p>{" "}
            <select name="" id="" onChange={(e) => setOnline(e.target.value)}>
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
          </div>
          <div className={styles.price}>
            <p>Цена</p>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={styles.img}>
            <p>Добавить изображения</p>
            <input
              type="file"
              multiple
              onChange={(e) => setImg(e.target.files)}
            />
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.linkinputOne}>
            <p>Cсылка на учебную группу</p>
            <input
              type="text"
              value={social}
              onChange={(e) => setSocial(e.target.value)}
            />
          </div>
          <div className={styles.linkInputTwo}>
            <p>место проведения</p>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
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
