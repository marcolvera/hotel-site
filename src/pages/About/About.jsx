import React from 'react';
import './About.css';
import NavBar from '../../components/NavBar/NavBar';
import AboutBlock from '../../components/AboutBlock/AboutBlock'
import Reviews from '../../components/Reviews/Reviews';
import Footer from '../../components/Footer/Footer';

const About = () => {
    return (
        <div>
            <NavBar />
            <AboutBlock />
            <Reviews />
            <Footer />
        </div>
    )
}

export default About;
