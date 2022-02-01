import React from 'react';

// React router
import { NavLink } from 'react-router-dom';

// Logo and social media SVG 
import {
    Logo, 
    Facebook, 
    Whatsapp
} from '../../../assets/assets';

// Navigation data
import NAV_DATA from '../../../data/navigation';

// Stylesheet 
import './navigation-with-logo-and-socials.scss';

const Navigation = () => {
    return (
        <div id='nav-container'>
            <NavLink id='logo-container' to='/'>
                <img id='logo' src={Logo} alt='logo'/>
            </NavLink>
            <div id='nav-links-container'>
                <ul id='nav-links'>
                    {   
                        Object.keys(NAV_DATA).map((key, index) => (
                            <li key={NAV_DATA[key].id}>
                                <NavLink 
                                    to={NAV_DATA[key].routeName}
                                    className={navLink =>
                                        "link" + (navLink.isActive ? " active" : "")
                                    }
                                >
                                    {NAV_DATA[key].title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* <div id='nav-socials-container'>
                <img className='socials' src={Facebook} alt='facebook'/>
                <img className='socials' src={Whatsapp} alt='whatsapp'/>
            </div> */}
        </div>
    );
}

export default Navigation;