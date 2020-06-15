import React from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.block1}>Hello World</div>
                <div className={styles.block2}>Hello World</div>
            </div>
        </div>
    )
};

export default InfoBlock;