import styles from './UserCard.styles.module.css'
// images
import bckg_img from '../../images/bckg_img.png' // bckg-img for user-card
import pfp_img from '../../images/kakKakat.jpg'
import instagram_logo from '../../images/instagram_logo.png'

// rsc
const UserCard = () => {
    return (
        // display flex
    <div>    
        <div className={styles.current_course}>
            <div className={styles.user_card}>
                {/* w:300, h:170 */}
                <img className={styles.background_pic} src={bckg_img} alt="/" />
                <div className={styles.info}>
                    {/* w: 100; border-radius: 50%; border: 1px solid white */}
                    <img className={styles.pfp} src={pfp_img} alt="" />

                    <div className={styles.info_text}>
                        <h1 className={styles.h1}>Anonimous 177</h1>
                        <h3 className={styles.h3}>Руководитель руководителей</h3> 
                        {/* .social_clubs here */}
                        <div className={styles.center}>
                            <div className={styles.social_clubs}>
                                <img src={instagram_logo} alt="/" />
                                <img src={instagram_logo} alt="/" />
                                <img src={instagram_logo} alt="/" />
                            </div>    
                        </div>      

                        {/* .short_info here */}
                        <div className={styles.center}>
                            <div className={styles.short_info}>
                                Front-end разработчик. Практик верстки сайтов. 
                                Cозданием сайтов занимаюсь с 2012 года. 
                                Работал в нескольких ИТ компаниях и наработал 
                                более 10 000 часов в создании сайтов различной сложности.     
                            </div>  
                        </div>

                        {/* red and blue buttons here */}
                        <div className={styles.center}>
                            <div className={styles.buttons}>
                                <button className={styles.red_button}>Мои курсы</button>
                                <button className={styles.blue_button}>Написать мне</button>
                            </div>
                        </div>                    
                        
                    </div>

                </div>
            </div>
            
        </div>
        <div className={styles.background_down}></div>
    </div>
    );
};

export default UserCard;