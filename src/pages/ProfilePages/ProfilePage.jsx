import React from "react";
import styles from "./ProfilePage.module.css";
import dragimg from "../../image/drag.jpeg";

function ProfilePage() {
  return (
    <div className={styles.main_card}>
      <div className={styles.profile_card}>
        <img className={styles.img_card} src={dragimg} alt="" />
        <div className={styles.profile_name}>Мой Профиль</div>
      </div>
      <div className={styles.inp_info_card}>
        <input className={styles.inp_info} type="text" placeholder="Nickname" />
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
      </div>
    </div>
  );
}

export default ProfilePage;
