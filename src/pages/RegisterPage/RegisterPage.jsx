import React from 'react'
import styles from './RegisterPage.module.css';

function RegisterPage() {
    return (
        <div className={styles.main_card}>
        <div className={styles.profile_card}>
            <div className={styles.profile_name}>Вход</div>
        </div>
        <div className={styles.inp_info_card}>
            <input className={styles.inp_info} type="text" placeholder='Логин'/>
            <input className={styles.inp_info} type="text" placeholder='Пароль'/>
            
            <div className={styles.auth_but_card}>
                <button className={styles.but_card}>Сохранить</button>
                <div className={styles.card_proff}>
                    <div className={styles.profile_no}>нет аккаунта?</div>
                    <div className={styles.auth_card}>Зарегистрируетесь</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage