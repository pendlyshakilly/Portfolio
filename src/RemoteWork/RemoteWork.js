import React from 'react';
import styles from './RemoteWork.module.css'
import stylesContainer from '../Common/Styles/Container.module.scss'


const RemoteWork = () => {
    return (
        <div className={styles.RemoteWorkBlock}>
         <div className={`${stylesContainer.Container} ${styles.RemoteWorkContainer}`}>
            <h1 className={styles.title}>Сonsidering options for remote work</h1>
             <h2 className={styles.button}><span>hire me</span></h2>
         </div>
        </div>
    );
};

export default RemoteWork;