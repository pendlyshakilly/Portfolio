import React from 'react';
import styles from './Footer.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import Logo1 from '../Common/Image/free_icon_4.svg'
import Logo2 from '../Common/Image/free_icon_5.svg'
import Logo3 from '../Common/Image/free_icon_6.svg'
import Logo4 from '../Common/Image/free_icon_7.svg'

const Footer = () => {
    return (
        <div className={styles.FooterBlock}>
            <div className={`${stylesContainer.Container} ${styles.FooterContainer}`}>    
            <h2 className={styles.title}>©2023 All rights reserved - Illya Pendlyshak</h2>
            <div className={styles.form}>
                 <img src={Logo1} className={styles.Info}></img>
                 <img src={Logo2} className={styles.Info}></img>
                 <img src={Logo3} className={styles.Info}></img>
                 <img src={Logo4} className={styles.Info}></img>
                </div>
         </div>
        </div>
    );
};

export default Footer;