import React from 'react';
import styles from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={styles.Nav}>
         <span href={'k'} className={styles.button}>Home</span>
         <span href={'k'} className={styles.button}>Skills</span>
         <span href={'k'} className={styles.button}>Projects</span>
         <span href={'f'} className={styles.button}>Contact</span>
        </div>
    );
};

export default Nav;