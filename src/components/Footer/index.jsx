import React from "react";
import styles from "./Footer.module.scss";
import proxima from "../../images/logo-footer.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter-button.png";
import pinterest from "../../images/pinterest-logo.png";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.img}>
          <img src={proxima} alt="no" />
        </div>
        <div className={styles.text}>
          <p>3rd Floor, Santa Monica Beach, CA, San Francisco</p>
          <p>(359) 0 123 456 789 - info@yourmail.com</p>
        </div>
        <div className={styles.link}>
          <a className={styles.a} href="/">
            <img src={facebook} alt="" />
          </a>
          <a className={styles.a} href="/">
            <img src={twitter} alt="" />
          </a>
          <a className={styles.a} href="/">
            <img src={pinterest} alt="" />
          </a>
        </div>
      </div>

      <div className={styles.end}>Copyright 2022 - All Rights Reserved - Designed by PX</div>
    </>
  );
};

export default Footer;
