import React from 'react';
import styles from './TeacherPage.module.css';
import pfp from '../../images/kakKakat.jpg';
const Teacher = () => {
    
    return (
        <div className={styles.teacher_card}>
                <img className={styles.pfp} src={pfp} alt="/" />
                <div className={styles.name_bio}>
                    <h1>Анонимус</h1>
                    <div className={styles.bio}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maiores omnis dolorem ipsa et quibusdam vero maxime nam, ex similique sequi eos, aliquid labore, corrupti delectus cum possimus molestiae! Itaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maiores omnis dolorem ipsa et quibusdam vero maxime nam, ex similique sequi eos, aliquid labore, corrupti delectus cum possimus molestiae! Itaque?

                    </div>
                    <div className={styles.button_block}>
                        <button><a href='/'>Подробнее</a></button>
                    </div>
                </div>
            </div>
    );
};

export default Teacher;