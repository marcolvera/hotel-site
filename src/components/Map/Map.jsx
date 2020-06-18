import React from 'react';
import styles from './Map.module.css';

const Map = () => {
    return(
        <div>
            <h1 className={styles.h1}><span>Find Your Next</span> Adventure</h1>
            <div className={styles.container}>
                <div className={styles.box1}>
                    <div className={styles.content}>
                        <h3>Get Inspired</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.</p>
                    </div>
                </div>
                <div className={styles.box2}>
                    <div className={styles.content}>
                        <h3>Plan Ahead</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.</p>
                    </div>
                </div>
                <div className={styles.box3}>
                    <div className={styles.content}>
                        <h3>Have Fun</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsa.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Map;
