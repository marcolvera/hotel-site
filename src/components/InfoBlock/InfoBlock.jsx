import React from 'react';
import styles from './InfoBlock.module.css';
import { Link } from 'react-router-dom';

const InfoBlock = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.block1}> </div>
                <div className={styles.block2}>
                    <div className={styles.content}>
                        <h4><span>Find a Price</span> Right for You</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure ducimus optio ratione culpa 
                            aliquam iusto tempore adipisci provident nemo modi, 
                            eum necessitatibus tenetur fuga suscipit rem accusamus nulla corrupti?
                        </p>
                        <Link className={styles.link} to='/about'><div className={styles.btn}><h5>Learn More</h5></div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default InfoBlock;