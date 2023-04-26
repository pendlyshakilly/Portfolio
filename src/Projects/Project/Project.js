import React from 'react';
import styles from './Project.module.scss'
import styleButton from '../../Common/Styles/Button.module.scss'

const Project = (props) => {
    return (
        <div className={styles.project}>
          <div className={styles.icon} style={props.styles}>
              <span className={`${styles.Span} ${styleButton.Button}`} style={{backgroundColor: `${props.PrimeryColor}`}}><h1>Check</h1></span>
          </div>
            <h3 className={styles.Title}>{props.title}</h3>
            <span className={styles.Description}>{props.description}</span>
        </div>
    );
};

export default Project;