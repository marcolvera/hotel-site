import React from 'react';
import styles from './ShowCase.module.css';

const ShowCase = () => {
    return (
        <div>
            <div className={styles.showContainer}>
                <div className={styles.content}>
                    <h1><span className={styles.color}>Enjoy</span> Your Stay</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempore voluptas, 
                    eligendi ad ducimus expedita quidem quasi aliquam id? Distinctio!
                    </p>
                </div>
                <div className={styles.inputBox}>
                    <input placeholder='Search By City...' type="text"/>
                </div>
            </div>
        </div>
    )
}

export default ShowCase;


       
        
