import React from 'react';
import styles from './TeacherPage.module.css';
import pfp from '../../images/kakKakat.jpg';
const Teacher = ({nickname, description, avatar}) => {
    return (
        <div className={styles.teacher_card}>
                <img className={styles.pfp} src={pfp} alt="/" />
                <div className={styles.name_bio}>
                    <h1>{nickname}</h1>
                    <div className={styles.bio}>
                    {description}
                    </div>
                    <div className={styles.button_block}>
                        <button><a href='/'>Подробнее</a></button>
                    </div>
                </div>
            </div>
    );
};

export default Teacher;