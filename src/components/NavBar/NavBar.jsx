import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div id='navBar'>
                <Link to='/' className='navLinks'>Hotel Site</Link>
                <div id='nav'>
                    <Link to='/' className='navLinks'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/about' className='navLinks'>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='contact' className='navLinks'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
                    
                   

            
                