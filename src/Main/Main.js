import React from 'react';
import styles from '../Main/Main.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import StylesButton from '../Common/Styles/Button.module.scss'

const Main = () => {
    return (
        <div className={styles.Main}>
            <div className={`${stylesContainer.Container} ${styles.Container}`}>
                <div className={styles.AboutMe}>
                    <h6 className={styles.Info}><span>Welocme to my website</span></h6>
                    <h1 className={styles.Name}><span>I am <a style={{color: "#50BEC2"}}>Illia Pendlyshak</a> a Frontend developer</span></h1>
                    <p className={styles.description}>In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia.</p>
                    <div className={styles.Button}><button className={StylesButton.Button}>My Resume</button></div>
                 </div>
                <div className={styles.Photo}></div>
            </div>
        </div>
    );
};

export default Main;