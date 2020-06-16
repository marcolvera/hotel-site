import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowCase from '../../components/ShowCase/ShowCase';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import InfoSection from '../../components/InfoSection/InfoSection';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ShowCase />
            <InfoBlock />
            <InfoSection />
        </div>
    )
}

export default Home;