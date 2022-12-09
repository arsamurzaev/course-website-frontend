import React, { useEffect } from 'react';
import styles from './TeacherPage.module.css'
import Teacher from './Teacher';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../../features/users/usersSlice'

const TeachersPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const users = useSelector(state => state.users.user);

    return (
        <div className={styles.page}>
            <div className={styles.input_block}>
                <div className={styles.input_block_block}>
                    <div>Поиск по имени</div>
                    <input type="text" />
                </div>
            </div>

            {
                users.map(user => {
                    if (user.role === 'teacher') {
                        return (
                            <Teacher
                                nickname={user.nickname}
                                description={user.description}
                                avatar={user.avatar}
                            />
                        )
                    }
                })
            }


        </div>
    );
};

export default TeachersPage;