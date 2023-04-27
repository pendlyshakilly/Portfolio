import React from 'react';
import styles from './Header.module.scss'
import Nav from "../Nav/Nav";
import Logo from '../Common/Image/free_icon_8.svg'

const Header = (props) => {
 const colors = [{value: 'red', id: 1}, 
 {value: 'blue', id: 2}, 
 {value: 'green', id: 3}, 
 {value: 'yellow', id: 4}, 
 {value: 'default', id: 5, 
 color: '#50BEC2'}]
    
    return (
        <div className={styles.Header}>
              <div className={styles.select}>
                <img src={'https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=settings-01'} onClick={() => {props.onClick()}}/>
                    {props.editMode && <div className={styles.Container} >
                        chose your color:
                        {colors.map(el => <div onClick={() => {props.ChangeColor(el.color ? el.color : el.value); props.onClick()}}  key={el.id} className={styles.ContainerMain}>
                            <span>{el.value}</span>
                            <div style={{width: '30px', height:  '20px', backgroundColor: `${el.color ? el.color : el.value}`}}>
                                </div>
                                </div>)}
                        </div>}
                    </div>
                <Nav/>
        </div>
    );
};

export default Header;