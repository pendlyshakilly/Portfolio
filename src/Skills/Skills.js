import React from 'react';
import styles from './Skills.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import Skill from './Skill/Skill';
import Logo1 from '../Common/Image/free_icon_1.svg'
import Logo2 from '../Common/Image/free_icon_2.svg'
import Logo3 from '../Common/Image/free_icon_3.svg'

const Skills = () => {
    const state = [{title: 'React', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old', Logo: Logo1},
        {title: 'Angular', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old', Logo: Logo2},
        {title: 'Vue', description: 'Hi my name is Illya i am react frontend developer I study on technical lyceum, i am 16 years old', Logo: Logo3}]

    return (
        <div className={styles.SkillsBlock}>
         <div className={`${stylesContainer.Container} ${styles.SkillsContainer}`}>
             <h1 className={styles.title}><span className={styles.Psevdo}>What I Knew</span></h1>
             <div className={styles.skills}>              
                 {state.map((el , i) => <Skill key={i} title={el.title} description={el.description} Logo={el.Logo}/>)}
             </div>
         </div>
        </div>
    );
};

export default Skills;