import React from 'react';
import styles from './PlaceList.module.css';

const PlaceList = () => {
    return(
        <div>
            <h1 className={styles.h1}>Explore Destinations</h1>
            <div className={styles.container}>
                <div className={styles.rows}>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                </div>
                <div className={styles.rows}>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                    <h4>Hello World</h4>
                </div>
            </div>
        </div>
    )
};

export default PlaceList;