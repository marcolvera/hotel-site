import React from 'react';
import styles from './InfoBlock.module.css';

const InfoBlock = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.block1}> 
                    {/* <img src="https://i.imgur.com/f69CzXA.png" alt=""/> */}
                </div>
                <div className={styles.block2}>
                    <div className={styles.content}>
                        <h4><span>Find a Price</span> Right for You</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure ducimus optio ratione culpa 
                            aliquam iusto tempore adipisci provident nemo modi, 
                            eum necessitatibus tenetur fuga suscipit rem accusamus nulla corrupti?
                        </p>
                        <div><h5>Learn More</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default InfoBlock;