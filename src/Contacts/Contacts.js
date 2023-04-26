import React from 'react';
import styles from './Contacts.module.scss'
import stylesContainer from '../Common/Styles/Container.module.scss'
import styleButton from '../Common/Styles/Button.module.scss'

const Contacts = (props) => {
    return (
        <div className={styles.ContactsBlock}>
            <div className={`${stylesContainer.Container} ${styles.ContactsContainer}`}>
                <h1 className={styles.title}>Contact Me</h1>
                <form className={styles.form}>
                    <input className={styles.Input} placeholder='Your Name' type={'text'}/>
                    <input className={styles.Input} placeholder='Your Email' type={'text'}/>
                    <input className={styles.Input} placeholder='Your Phone' type={'text'}/>
                    <textarea className={styles.TextArea} placeholder='Your Message' />
                    <span className={`${styleButton.Button} ${styles.Button}`} style={{backgroundColor: `${props.PrimeryColor}`}}>Send Message</span>
                </form>
                <div className={styles.Info}>
                 <div style={{margin: '15px', textAlign: 'center'}}><h4 className={styles.Title}>Email Me</h4><p className={styles.Description}>pendlyshakilly@gmail.com</p></div>
                 <div style={{margin: '15px', textAlign: 'center'}}><h4 className={styles.Title}>Call Me</h4><p className={styles.Description}>0977263299</p></div>
                 <div style={{margin: '15px', textAlign: 'center'}}><h4 className={styles.Title}>Address</h4><p className={styles.Description}>Rue de Lille, Ill de France, Paris</p></div>
                </div>
         </div>
        </div>
    );
};

export default Contacts;