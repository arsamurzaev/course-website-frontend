import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={styles.main_card}>
      <div className={styles.profile_card}>
        <div className={styles.profile_name}>Вход</div>
      </div>
      <div className={styles.inp_info_card}>
        <input className={styles.inp_info} type="text" placeholder="Логин" />
        <input className={styles.inp_info} type="text" placeholder="Пароль" />

        <div className={styles.auth_but_card}>
          <button className={styles.but_card}>Войти</button>
          <div className={styles.card_proff}>
            <div className={styles.profile_no}>нет аккаунта?</div>
            <Link to="/register" className={styles.auth_card}>
              Зарегистрируетесь
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
