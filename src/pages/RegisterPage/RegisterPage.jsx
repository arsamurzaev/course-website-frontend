import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authSignUp } from "../../features/application/applicationSlice";
import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSetNickname = (e) => {
    setNickname(e.target.value);
  };
  const handleSetLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleSetPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ nickname, login, password }));

    setNickname("");
    setLogin("");
    setPassword("");
  };

  return (
    <form className={styles.main_card} onSubmit={handleSignUp}>
      <div className={styles.profile_card}>
        {/* <div className={styles.profile_name}>Регистрация</div> */}
        <div className={styles.waviy}>
            <span style={{'--i': 1}}>Р</span>
            <span style={{'--i':2}}>е</span>
            <span style={{'--i':3}}>г</span>
            <span style={{'--i':4}}>и</span>
            <span style={{'--i':5}}>с</span>
            <span style={{'--i':6}}>т</span>
            <span style={{'--i':7}}>р</span>
            <span style={{'--i':8}}>а</span>
            <span style={{'--i':9}}>ц</span>
            <span style={{'--i':10}}>и</span>
            <span style={{'--i':10}}>я</span>
            <span style={{'--i':10}}>.</span>
          </div>
      </div>

      <div className={styles.inp_info_card}>
        <input
          className={styles.inp_info}
          type="text"
          placeholder="Имя пользователя"
          value={nickname}
          onChange={handleSetNickname}
        />
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
          <button className={styles.but_cards} type="submit">
            Зарегистрироваться
          </button>
          <div className={styles.card_proff}>
            <div className={styles.profile_no}>уже зарегистрированы?</div>
            <Link to="/auth" className={styles.auth_card}>
              войти в аккаунт
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
