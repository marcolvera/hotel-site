import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div id='navBar'>
                <div>
                    <Link to='/' className='navLinks'>Hotel Site</Link>
                </div>
                <div>
                    <Link to='/' className='navLinks'>Home</Link>
                    <Link to='/about' className='navLinks'>About</Link>
                    <Link to='/explore' className='navLinks'>Explore</Link>
                </div>
            </div>
        </div>
    )
}


export default NavBar;
                    
                   

            
                