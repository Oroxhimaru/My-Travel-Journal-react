import React from 'react';
import World from "../images/world.png";


export default function Navbar() {
    return(
        <nav className='nav'>
            <img src={World} alt="World logo" className="nav--logo" />
            <p>my travel journal.</p>
        </nav>
    );
}