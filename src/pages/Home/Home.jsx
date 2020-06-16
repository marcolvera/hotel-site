import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import ShowCase from '../../components/ShowCase/ShowCase';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import InfoSection from '../../components/InfoSection/InfoSection';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ShowCase />
            <InfoBlock />
            <InfoSection />
            <Footer />
        </div>
    )
}

export default Home;