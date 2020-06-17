import React from 'react';
import styles from './InfoSection.module.css';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const InfoSection = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.white}>
                    <div className={styles.icon}>
                        <LocationCityIcon style={{fontSize: 60}} />
                    </div>
                    <h3>Search by Location</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magnam. Molestias aperiam suscipit eaque inventore.</p>
                </div>
                <div className={styles.orange}>
                    <div className={styles.icon}>
                        <AttachMoneyIcon style={{fontSize: 60}} />
                    </div>
                    <h3>Compare Prices</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quibusdam sequi? Commodi, inventore id!</p>
                </div>
                <div className={styles.white}>
                    <div className={styles.icon}>
                        <FitnessCenterIcon style={{fontSize: 60}} />
                    </div>
                    <h3>View Amenities</h3>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias quibusdam sequi? Commodi, inventore id!</p>
                </div>
            </div>
        </div>
    )
};

export default InfoSection;
