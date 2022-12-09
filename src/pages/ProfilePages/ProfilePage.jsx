import React, { useEffect, useState } from "react";
import styles from "./ProfilePage.module.scss";
import dragimg from "../../image/drag.jpeg";
import avatar from "../../images/avatar_icons.png";
import SnowBack from "../../components/Background/Snow";
import { useDispatch, useSelector } from "react-redux";
import { editUser, fetchUser } from "../../features/users/usersSlice";
import eyeFalse from "../../image/icons8-закрытый-глаз-30.png";
import eyeTrue from "../../image/icons8-мультяшные-глаза-30.png";
import PreloaderPage from "../../preloader/PreloaderPage";

function ProfilePage() {
  const user = useSelector((state) => state.users.user);
  const id = useSelector((state) => state.application.userId);
  const path = useSelector((state) => state.users.user.avatar);
  const loader = useSelector((state) => state.users.loader);

  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  const [edit, setEdit] = useState(true);
  const [visible, setVisible] = useState(false);
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(photo);
    } else {
      setPreview(null);
    }
    dispatch(fetchUser(id));
  }, [dispatch, id, photo]);

  const handleExit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setPhoto(file);
    } else {
      setPhoto(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editUser({
        avatar: photo,
        userData: {
          nickname,
          email,
          password,
          id,
        },
      })
    );
    setPassword("");
  };


  return (
    <>
      <SnowBack />
      <form
        className={styles.main_card}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className={styles.profile_card}>
          <input
            id="avatar"
            hidden={true}
            type="file"
            onChange={handleAddPhoto}
            disabled={edit && true}
          />
          <label htmlFor="avatar">
            <img className={styles.icon} src={avatar} alt="" />
          </label>

          <img
            className={styles.img_card}
            src={preview ? preview : path || dragimg}
            alt=""
          />
          <div className={styles.waviy}>
            <span style={{ "--i": 1 }}>М</span>
            <span style={{ "--i": 2 }}>о</span>
            <span style={{ "--i": 3 }}>й</span>
            <span style={{ "--i": 4 }}>&nbsp;</span>
            <span style={{ "--i": 5 }}>П</span>
            <span style={{ "--i": 6 }}>р</span>
            <span style={{ "--i": 7 }}>о</span>
            <span style={{ "--i": 8 }}>ф</span>
            <span style={{ "--i": 9 }}>и</span>
            <span style={{ "--i": 10 }}>л</span>
            <span style={{ "--i": 10 }}>ь</span>
            <span style={{ "--i": 10 }}>.</span>
          </div>
        </div>
        <div className={styles.inp_info_card}>
          <input
            type="text"
            className={styles.inp_info}
            defaultValue={(e) => e.target.placeholder}
            value={nickname}
            placeholder={edit ? user.nickname : "Имя пользователя"}
            onChange={(e) => setNickname(e.target.value)}
            disabled={edit && true}
          />
          <input
            type="email"
            className={styles.inp_info}
            defaultValue={(e) => e.target.placeholder}
            value={email}
            placeholder={edit ? user.email : "Email"}
            onChange={(e) => setEmail(e.target.value)}
            disabled={edit && true}
          />
          <input
            type={visible ? "text" : "password"}
            className={styles.inp_info}
            placeholder="Новый пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="input_password"
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                background: "transparent",
                flex: 1,
                textAlign: "end",
              }}
              onClick={() => setVisible(!visible)}
            >
              <img src={visible ? eyeTrue : eyeFalse} alt="" />
            </div>
          </div>
          <div className={styles.avatar_card}></div>
          <button
            className={styles.but_card}
            type={!edit ? "button" : "submit"}
            onClick={() => setEdit(!edit)}
          >
            {edit ? "Изменить" : "Сохранить"}
          </button>
          <button
            onClick={handleExit}
            className={styles.but_cardx}
            type="button"
          >
            Выйти
          </button>
        </div>
      </form>
    </>
  );
}

export default ProfilePage;
