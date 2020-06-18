import React from 'react';
import './Explore.css';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import PlaceList from '../../components/PlaceList/PlaceList';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Map />
            <PlaceList />
            <Footer />
        </div>
    )
}

export default Contact;
