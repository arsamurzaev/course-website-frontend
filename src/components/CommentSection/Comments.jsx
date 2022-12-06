import React from 'react';
import styles from './Comments.module.css'
// images 
import anonimous_pfp from '../../images/anonimous_pfp.jpg'

const Comments = () => {
    return (
        <div className={styles.section}>

            <h1 className={styles.h1}>Обсуждения</h1>
            <form action="submit">
                <input className={styles.input} type="text" placeholder='Текст комментария' />
                <div className="button_block">
                    <button className={styles.send_button}>Отправить</button>
                </div>
            </form>
            <div className={styles.comment}>
                <div className={styles.comment_user_info_block}>
                    <img className={styles.img} src={anonimous_pfp} alt="" />
                    <div className={styles.comment_user_info}>
                        <div className={styles.name}>Ёшкин Кот</div>
                        <div className={styles.timestamb}>1 неделю назад</div>
                    </div>
                </div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut odit adipisci? Voluptas odit cumque ab, ipsa expedita aliquam magnam laborum maxime, sint libero quasi obcaecati blanditiis iste ipsum? Ipsum?
                </div>
            </div>
        </div>
    );
};

export default Comments;