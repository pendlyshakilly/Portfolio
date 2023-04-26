import React from 'react';
import styles from './Projects.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import Project from "./Project/Project";

const Projects = (props) => {
   const state = [{title: 'Todolist', description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...', style: {backgroundImage: 'url(' + 'https://cdn.neowin.com/news/images/uploaded/2020/09/1600872693_todoist-boards.gif' + ')'}},
                 {title: 'Social-network', description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...', style: {backgroundImage: 'url(' + 'https://images.ctfassets.net/az3stxsro5h5/4zcf6iC32wqJrvqpxnyKq5/f74adf08b63d7370a612451737190d2f/https___later.com_blog_wp-content_uploads_2018_11_stories3.gif' + ')'}},]
    return (
        <div className={styles.ProjectBlock}>
         <div className={`${stylesContainer.Container} ${styles.ProjectContainer}`}>
             <h2 className={styles.title}><span>My projects</span></h2>
             <div className={styles.Projects}>
                 {state.map((el, i) => <Project key={i} title={el.title} description={el.description} styles={el.style} PrimeryColor={props.PrimeryColor}/>)}
             </div>
         </div>
        </div>
    );
};

export default Projects;