import React from 'react';
import styles from './RegProfile.module.css';

function RegProfile() {
    return (
        <div className={styles.main_card}>
            <div className={styles.profile_card}>
                <div className={styles.profile_name}>Регистрация</div>
            </div>

            <div className={styles.inp_info_card}>
                <input className={styles.inp_info} type="text" placeholder='Имя пользователя'/>
                <input className={styles.inp_info} type="text" placeholder='Логин'/>
                <input className={styles.inp_info} type="text" placeholder='Пароль'/>
            
                <div className={styles.auth_but_card}>
                    <button className={styles.but_card}>Войти</button>
                    <div className={styles.card_proff}>
                        <div className={styles.profile_no}>уже зарегистрированы?</div>
                        <div className={styles.auth_card}>войти в аккаунт</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default RegProfile