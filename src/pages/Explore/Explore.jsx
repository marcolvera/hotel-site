import React from 'react';
import './Explore.css';
import NavBar from '../../components/NavBar/NavBar';
import Map from '../../components/Map/Map';
import PlaceList from '../../components/PlaceList/PlaceList';

const Contact = () => {
    return (
        <div>
            <NavBar />
            <Map />
            <PlaceList />
        </div>
    )
}

export default Contact;
