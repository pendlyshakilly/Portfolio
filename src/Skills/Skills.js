import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from '../Common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";

const Skills = () => {
    const state = [{title: 'js', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old'},
        {title: 'js', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old'},
        {title: 'js', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old'}]

    return (
        <div className={styles.SkillsBlock}>
         <div className={`${stylesContainer.Container} ${styles.SkillsContainer}`}>
             <h2 className={styles.title}>Skills</h2>
             <div className={styles.skills}>
        
                  <progress label={'as'} value={56} >56</progress>                
                 {state.map(el => <Skill title={el.title} description={el.description}/>)}
             </div>
         </div>
        </div>
    );
};

export default Skills;