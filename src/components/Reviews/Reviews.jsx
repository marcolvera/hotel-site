import React from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
    return(
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>Hear From our Users</h1>
                <div className={styles.box}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam corrupti nam. Illo, nobis eligendi.</p></div>
                <div className={styles.box}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam obcaecati modi praesentiump,</p></div>
            </div>
        </div>
    )
};

export default Reviews;
