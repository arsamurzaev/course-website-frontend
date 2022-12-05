import React from "react";
import styles from "./Footer.module.scss";
import proxima from "../../images/logo-proxima.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.img}>
        <img src={proxima} alt="no" />
      </div>
      <div>Техническая поддержка</div>
      <div className={styles.link}>
        <a href="/">facebook</a>
        <a href="/">vk</a>
        <a href="/">twiter</a>
      </div>
    </div>
  );
};

export default Footer;
