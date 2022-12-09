import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authSignIn } from "../../features/application/applicationSlice";
import styles from "./AuthPage.module.scss";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(authSignIn({ login, password }));

    setLogin("");
    setPassword("");
  };
  return (
    <form className={styles.main_card} onSubmit={handleSignIn}>
      <div className={styles.profile_card}>
        <div className={styles.waviy}>
            <span style={{'--i': 1}}>В</span>
            <span style={{'--i':2}}>х</span>
            <span style={{'--i':3}}>о</span>
            <span style={{'--i':4}}>д</span>
            <span style={{'--i':4}}>.</span>
          </div>
      </div>
      <div className={styles.inp_info_card}>
        <input
          className={styles.inp_info}
          type="text"
          placeholder="Логин"
          value={login}
          onChange={handleSetLogin}
        />
        <input
          className={styles.inp_info}
          type="text"
          placeholder="Пароль"
          value={password}
          onChange={handleSetPassword}
        />

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
    </form>
  );
};

export default AuthPage;
