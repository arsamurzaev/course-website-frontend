import React from 'react';
import styles from './TeacherPage.module.css'
import Teacher from './Teacher';

const TeachersPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.input_block}>
                <div className={styles.input_block_block}>
                    <div>Поиск по имени</div>
                    <input type="text" />
                </div>
            </div>


            <Teacher />
            


        </div>
    );
};

export default TeachersPage;