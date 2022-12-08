import React, { useEffect, useState } from "react";
import styles from "./ProfilePage.module.scss";
import dragimg from "../../image/drag.jpeg";
import avatar from '../../images/avatar_icons.png'
import SnowBack from "../../components/Background/Snow";

function ProfilePage() {

  const [photo, setPhoto] = useState("")
  const [preview, setPreview] = useState("")

  console.log(photo);

  useEffect(() => {
    if (photo) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(photo)
    } else {
      setPreview(null)
    }
  }, [photo])


  const handleExit = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <SnowBack />
      <div className={styles.main_card}>
        
        <div className={styles.profile_card}>
          


        <input id="avatar" hidden={true} type="file" onChange={(e) => {
          const file = e.target.files[0]
          if (file && file.type.substring(0,5) === "image") {
            setPhoto(file)
          } else {
            setPhoto(null)
          }
        }}/>
        <label htmlFor="avatar"><img className={styles.icon} src={avatar} alt="" /></label>


          <img className={styles.img_card} src={preview ? preview : dragimg} alt="" />
          {/* <div className={styles.profile_name}>Мой Профиль</div> */}
          <div className={styles.waviy}>
            <span style={{'-i': 1}}>М</span>
            <span style={{'--i':2}}>о</span>
            <span style={{'--i':3}}>й</span>
            <span style={{'--i':4}}>&nbsp;</span>
            <span style={{'--i':5}}>П</span>
            <span style={{'--i':6}}>р</span>
            <span style={{'--i':7}}>о</span>
            <span style={{'--i':8}}>ф</span>
            <span style={{'--i':9}}>и</span>
            <span style={{'--i':10}}>л</span>
            <span style={{'--i':10}}>ь</span>
            <span style={{'--i':10}}>.</span>
          </div>
        </div>
        <div className={styles.inp_info_card}>
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Имя пользователя..."
            disabled={true}
          />
          <input className={styles.inp_info} type="text" placeholder="email" />
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Новый пароль"
          />
          <input
            className={styles.inp_info}
            type="text"
            placeholder="Подтвердите пароль"
          />
          <div className={styles.avatar_card}>
          </div>
          <button className={styles.but_card}>Сохранить</button>
          <button onClick={handleExit} className={styles.but_cardx}>Выйти</button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
