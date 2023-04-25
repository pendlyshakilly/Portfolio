import React from "react";
import styles from './AdbouMe.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'

const AboutMe = () => {
   let skilsStatus = [{status: 75, name: 'Javascript', width: 228.75},{status: 67, name: 'Typescript', width: 204.35},{status: 40, name: 'Css', width: 122},{status: 60, name: 'TeamLead', width: 183}] 
  
    return (
        <div className={styles.Main}>
        <div className={`${stylesContainer.Container} ${styles.Container}`}>
             <div className={styles.Photo}></div>
            <div className={styles.AboutMe}>
             <h2 className={styles.Title}><span>About Me</span></h2>
             <span className={styles.Info}>
             In quis amet ex veniam in irure est culpa veniam velit fugiat cupidatat duis anim commodo elit in occaecat cupidatat eu et sunt commodo voluptate ullamco magna nulla amet. Lorem ipsum officia veniam enim sit culpa velit proident enim ea officia aute non in mollit culpa anim magna sit veniam irure eiusmod.
             </span>
    
            {skilsStatus.map((el, i) => {
                return <div style={{padding: '10px'}} key={i}>
                  <div className={styles.progresTitle}>
                        <span>{el.name}</span>
                        </div>
                     <div className={styles.Description}>
                    <div  className={styles.ProgressBar}>
                    <div style={{width: `${el.width}px`, height: '6px', backgroundColor: '#50BEC2', borderRadius: '5px'}}></div>
                    </div>
                    <div style={{paddingLeft: '10px', color: 'white'}}>{el.status}%</div>
                
             </div>
                </div> 
            })}
               
            
            </div>
        </div>
    </div>
    )
}

export default AboutMe