import React from 'react';
import styles from "./CoursePage.module.css";
import smmPh from "../../image/sms.png";
import { Link } from "react-router-dom";


const CourseCard = ({ description, name, online, price, tags }) => {
  


  return (
    <div className={styles.course}>
      <div className={styles.card_smm_cours}>
        <div className={styles.card_img_smm}>
          <img className={styles.img_smm} src={smmPh} alt="" />
        </div>



        
        <div className={styles.list_smm}>
          <div className={styles.top_info_block}>
            
            <div className={styles.p_curs}>{name}</div>
            <div className={styles.p_ned}>Длительность: 15 недель</div>
            <div className={styles.p_text}>
              
               {description.substr(0, 400) + '...'}
              
              </div>
          </div>

          <div className={styles.bottom_info_block}>
            <div className={styles.p_price}>Цена: {price} руб</div>
            <div className={styles.p_list}>
              {
                
                tags.slice(0, 5).map((tag)=><button className={styles.listing}>{tag}</button>)
              }
              
              {/* онлайн чи нет */}
              <button className={styles.listing}>{online === true ? 'онлайн' : 'оффлайн'}</button>
            </div>
            <div className={styles.but_info}>
              <button className={styles.p_info}>
                <Link to="/course">Подробнее</Link>
              </button>
            </div>
          </div>


        </div>
      </div>

    </div>
  );
};

export default CourseCard;