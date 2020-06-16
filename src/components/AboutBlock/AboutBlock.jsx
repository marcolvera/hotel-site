import React from 'react';
import styles from './AboutBlock.module.css'

const AboutBlock = () => {
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}><span>About</span> Hotel Site</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolore itaque corrupti officiis velit magnam. 
                    Porro quidem iste fugit dolor, ipsa sapiente harum ut velit totam? Itaque velit molestias distinctio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perspiciatis reiciendis maiores quos sapiente, 
                    totam dolorem deserunt adipisci doloremque vitae?</p>
            </div>
            <div>
                <img className={styles.img} src="https://i.imgur.com/Ls50N7D.jpg" alt=""/>
            </div>
        </div>
    )
};

export default AboutBlock;