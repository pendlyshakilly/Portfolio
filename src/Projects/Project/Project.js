import React from 'react';
import styles from './Project.module.css'


const Project = (props) => {
    return (
        <div className={styles.project}>
          <div className={styles.icon}>
              <span className={styles.Span}><h1>Check</h1></span>
          </div>
            <h3 className={styles.Text}>{props.title}</h3>
            <span className={styles.Text}>{props.description}</span>
        </div>
    );
};

export default Project;