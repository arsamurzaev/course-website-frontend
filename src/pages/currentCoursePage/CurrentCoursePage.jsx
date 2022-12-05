import React from 'react';
import UserCard from '../userCard/UserCard'
import styles from './CurrentCourse.module.css'
// images
import ekelemene_pic from '../../images/ekalemene.png'

const CurrentCoursePage = () => {
    return (
        // main useless div yet
        <div className={styles.main}>
        
        <div className={styles.page}>
            <UserCard />
            <div className={styles.info}>
                <div className={styles.frame}>
                    <div className={styles.text_rating_of_course}>
                        Рейтинг курса
                    </div>
                    <div className={styles.title_block}>

                        <h2 className={styles.title}>Как создавать сайты легко</h2>
                        <div className={styles.title_info}>
                            <span className={styles.timestamb}>23.11.71  •  </span>
                            <span className={styles.direction}>Создание сайтов</span>
                        </div>
                    </div>
                    <div className={styles.text}>
                        <span> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae consequatur libero iste sapiente, ipsum totam quo facilis possimus ex, perferendis placeat voluptas velit quis ea enim iusto voluptates a.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti quo ea iusto. Sed dignissimos libero aut, dolor doloremque qui, dolores sapiente possimus consectetur sequi quod necessitatibus nemo. Perspiciatis, libero?
                            <br />
                            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam quaerat hic ullam? Inventore placeat mollitia, sit at maxime quisquam aliquid! Vel illo recusandae unde omnis fugit laboriosam, voluptatibus eum?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus vitae blanditiis voluptate velit ipsum maiores eveniet, perferendis culpa earum, quas quo! Facilis soluta non in reiciendis hic! Voluptatum, unde aperiam.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ex culpa, vel id nihil itaque accusamus ducimus adipisci deserunt aut placeat voluptas, ipsam iure sit eius animi ad quaerat vero.

                            <div className={styles.img_block}>
                                <img className={styles.img} src={ekelemene_pic} alt="/" />
                            </div>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae consequatur libero iste sapiente, ipsum totam quo facilis possimus ex, perferendis placeat voluptas velit quis ea enim iusto voluptates a.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti quo ea iusto. Sed dignissimos libero aut, dolor doloremque qui, dolores sapiente possimus consectetur sequi quod necessitatibus nemo. Perspiciatis, libero?
                            
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CurrentCoursePage;