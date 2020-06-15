import React from 'react';
import './Home.css';
import NavBar from '../../components/NavBar/NavBar';
import ShowCase from '../../components/ShowCase/ShowCase';

const Home = () => {
    return (
        <div>
            <NavBar />
            <ShowCase />
        </div>
    )
}

export default Home;