import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from '../Common/Styles/Container.module.scss'

const Contacts = () => {
    return (
        <div className={styles.ContactsBlock}>
            <div className={`${stylesContainer.Container} ${styles.ContactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea className={styles.TextArea} />
                </form>
                <h2 className={styles.title}>Send</h2>
         </div>
        </div>
    );
};

export default Contacts;