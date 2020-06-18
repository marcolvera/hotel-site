import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return(
        <div className={styles.footer}>
            <p className={styles.p}>Hotel Site is not responsible for information on external sites. CopyRight&copy;Hotel Site</p>
            <h5 className={styles.h5}>Hotel Site</h5>
        </div>
    )
};

export default Footer;
