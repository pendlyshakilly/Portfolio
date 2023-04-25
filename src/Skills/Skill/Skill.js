import React from 'react';
import styles from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={styles.skill}>
          <div className={styles.title}>
            <img className={styles.icon} src={props.Logo} alt='img'/>
            <h2 className={styles.H3}>{props.title}</h2>
            </div>
            <span className={styles.text}>{props.description}</span>
        </div>
    );
};

export default Skill;