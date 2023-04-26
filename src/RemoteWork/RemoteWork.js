import React from 'react';
import styles from './RemoteWork.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import styleButton from '../Common/Styles/Button.module.scss'

const RemoteWork = (props) => {
    return (
        <div className={styles.RemoteWorkBlock}>
         <div className={`${stylesContainer.Container} ${styles.RemoteWorkContainer}`}>
            <h1 className={styles.title}>Considering options for remote work</h1>
             <h2 className={`${styles.button} ${styleButton.Button}`} style={{backgroundColor: `${props.PrimeryColor}`}}><span>hire me</span></h2>
         </div>
        </div>
    );
};

export default RemoteWork;