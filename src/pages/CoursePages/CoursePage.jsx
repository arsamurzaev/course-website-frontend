import React from "react";
import styles from "./CoursePage.module.css";
import smmPh from "../../image/sms.png";
import { Link } from "react-router-dom";

function CoursePage() {
  return (
    <div className={styles.course}>
      <div className={styles.main_categ}>Выберите категорию курсов</div>

      <div className={styles.categories}>
        <button className={styles.circle}>IT</button>
        <button className={styles.circle}>Спорт</button>
        <button className={styles.circle}>Творчество</button>
      </div>

      <div className={styles.inp_price_categ}>
        <div className={styles.search_teg}>
          <div className={styles.name_teg}>Поиск по тегам</div>
          <hr className={styles.siz} />
          <input
            className={styles.inp_teg}
            type="text"
            placeholder="введите название.."
          />
        </div>
        <div className={styles.price_teg}>
          <div className={styles.price}>Цена</div>
          <hr className={styles.siz} />
          от
          <input
            className={styles.inp_price}
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
          />
          до
          <input
            className={styles.inp_price}
            type="number"
            step="0.01"
            min="0"
            placeholder="0,00"
          />
        </div>
      </div>

      <div className={styles.card_smm_cours}>
        <div className={styles.card_img_smm}>
          <img className={styles.img_smm} src={smmPh} alt="" />
        </div>
        <div className={styles.list_smm}>
          <div className={styles.p_curs}>Курсы по SMM</div>
          <div className={styles.p_ned}>Длительность: 15 недель</div>
          <div className={styles.p_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
            sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
          </div>
          <div className={styles.p_price}>Цена: 1400 руб</div>
          <div className={styles.p_list}>
            <button className={styles.listing}>дизайн</button>
            <button className={styles.listing}>создание сайта</button>
            <button className={styles.listing}>SMM</button>
            <button className={styles.listing}>Онлайн</button>
          </div>
          <div className={styles.but_info}>
            <button className={styles.p_info}>
              <Link to="/course">Подробнее</Link>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.res}>hl,;</div>
    </div>
  );
}

export default CoursePage;
