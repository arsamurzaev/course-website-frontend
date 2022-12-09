import React from "react";
import styles from "./Header.module.scss";
import proxima from "../../images/logo-proxima.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.users.user);

  const token = useSelector((state) => state.application.token);

  return (
    <div className={styles.header}>
      <div>
        <img src={proxima} alt="mo" />
      </div>
      <div>
        <Link to="/">
          <button>главная</button>
        </Link>
        <Link to="/courses">
          <button>курсы</button>
        </Link>
        <Link to="#">
          <button>преподаватели</button>
        </Link>
        {user.role === "teacher" && (
          <Link to="/my-courses">
            <button>Мои курсы</button>
          </Link>
        )}
      </div>
      <div>
        <Link to={!token ? "/auth" : "/profile"}>
          <button>{!token ? "войти" : "мой профиль"}</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
