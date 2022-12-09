import React from 'react';
import styles from './TeacherPage.module.css'
import Teacher from './Teacher';
import { useSelector } from 'react-redux';

const TeachersPage = () => {
    const users = useSelector(state => state.users)
    console.log(users);
    return (
        <div className={styles.page}>
            <div className={styles.input_block}>
                <div className={styles.input_block_block}>
                    <div>Поиск по имени</div>
                    <input type="text" />
                </div>
            </div>


            <Teacher />
            

s
        </div>
    );
};

export default TeachersPage;