import React from 'react';
import styles from './Projects.module.css'
import stylesContainer from '../Common/Styles/Container.module.scss'
import Project from "./Project/Project";

const Projects = () => {
   const state = [{title: 'Todolist', description: 'this is my project called ToDoList'},
                 {title: 'Social-network', description: 'this is my project called Social-network'},
                 ]
    return (
        <div className={styles.ProjectBlock}>
         <div className={`${stylesContainer.Container} ${styles.ProjectContainer}`}>
             <h2 className={styles.title}><span>My projects</span></h2>
             <div className={styles.Projects}>
                 {state.map(el => <Project title={el.title} description={el.description}/>)}
             </div>
         </div>
        </div>
    );
};

export default Projects;