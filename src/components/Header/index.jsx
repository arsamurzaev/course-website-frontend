import React from "react";
import styles from "./Header.module.scss";
import proxima from "../../images/logo-proxima.png";
import { Link } from "react-router-dom";

const Header = () => {
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
      </div>
      <div>
        <Link to="/profile">
          <button>мой профиль</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
