import React from "react";
import styles from "./ProfilePage.module.css";
import dragimg from "../../image/drag.jpeg";
import SnowBack from "../../components/Background/Snow";

function ProfilePage() {
  const handleExit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <SnowBack />
      <div className={styles.main_card}>
        <div className={styles.profile_card}>
          <img className={styles.img_card} src={dragimg} alt="" />
          <div className={styles.profile_name}>Мой Профиль</div>
        </div>
        <div className={styles.inp_info_card}>
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Имя пользователя..."
            disabled={true}
          />
          <input className={styles.inp_info} type="text" placeholder="email" />
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Новый пароль"
          />
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Подтвердите пароль"
          />
          <div className={styles.avatar_card}>
            <input type="file" />
          </div>
          <button className={styles.but_card}>Сохранить</button>
          <button onClick={handleExit}>Выйти</button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
