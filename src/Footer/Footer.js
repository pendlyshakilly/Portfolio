import React from 'react';
import styles from './Footer.module.css'
import stylesContainer from '../Common/Styles/Container.module.scss'

const Footer = () => {
    return (
        <div className={styles.FooterBlock}>
            <div className={`${stylesContainer.Container} ${styles.FooterContainer}`}>
                <h2 className={styles.title}>Illya Pendlyshak</h2>
                <div className={styles.form}>
                 <div className={styles.Info}></div>
                 <div className={styles.Info}></div>
                 <div className={styles.Info}></div>
                 <div className={styles.Info}></div>
                </div>
                <h2 className={styles.title}>©2023 All rights reserved</h2>
         </div>
        </div>
    );
};

export default Footer;