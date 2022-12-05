import React from "react";
import styles from "./Description.module.scss";
import  creation  from "../../images/description-creation.png";
import  sport  from "../../images/description-sport.png";
import  it  from "../../images/description-it.png";

const Description = () => {
  return (
    <div className={styles.main}>
      <div className={styles.descriptionIt}>
        <img src={it} alt="no" />
        <div className={styles.root}></div>
      </div>
      <div className={styles.descriptionIt}>
        <img src={sport} alt="no" />
        <div className={styles.root}></div>
      </div>
      <div className={styles.descriptionIt}>
        <img src={creation} alt="no" />
        <div className={styles.root}></div>
      </div>
    </div>
  );
};

export default Description;
