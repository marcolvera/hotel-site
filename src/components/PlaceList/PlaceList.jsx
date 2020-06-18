import React from 'react';
import styles from './PlaceList.module.css';

const PlaceList = () => {
    return(
        <div>
            <h1 className={styles.h1}>Explore Destinations</h1>
            <div className={styles.container}>
                <div className={styles.rows}>
                    <h5 className={styles.link}>Las Vegas</h5>
                    <h5 className={styles.link}>Boston</h5>
                    <h5 className={styles.link}>Orlando</h5>
                    <h5 className={styles.link}>Los Angeles</h5>
                </div>
                <div className={styles.rows}>
                    <h5 className={styles.link}>London</h5>
                    <h5 className={styles.link}>Seattle</h5>
                    <h5 className={styles.link}>Atlanta</h5>
                    <h5 className={styles.link}>Miami</h5>
                </div>
                <div className={styles.rows}>
                    <h5 className={styles.link}>Washinton</h5>
                    <h5 className={styles.link}>San Fransico</h5>
                    <h5 className={styles.link}>Gulf Shores</h5>
                    <h5 className={styles.link}>Honolulu</h5>
                </div>
                <div className={styles.rows}>
                    <h5 className={styles.link}>Texas</h5>
                    <h5 className={styles.link}>New Jersey</h5>
                    <h5 className={styles.link}>Illinios</h5>
                    <h5 className={styles.link}>Main</h5>
                </div>
            </div>
        </div>
    )
};

export default PlaceList;