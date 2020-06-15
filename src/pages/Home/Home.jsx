import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowCase from '../../components/ShowCase/ShowCase';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ShowCase />
            <InfoBlock />
        </div>
    )
}

export default Home;