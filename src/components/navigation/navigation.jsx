// Default react 
import React from 'react';

// React router links
import { Link, NavLink, useLocation } from 'react-router-dom';

// Logo and social media SVG 
import { 
    Facebook, 
    Whatsapp, 
    Logo 
} from '../../assets/assets';

// Navagational data
import NAVIGATION_DATA from '../../data/navigation';

// Stylesheet
import './navigation.scss';

export default function Navigation() {
    const location = useLocation();

    return (
        <div id='nav-container'>
            <Link id='logo-container' to='/'>
                <img id='logo' src={Logo} alt='logo'/>
            </Link>
            <div id='nav-links-container'>
                <ul id='nav-links'>
                    {   
                        NAVIGATION_DATA.map(({ id, routeName, name }) => (
                            <li key={id}>
                                <NavLink 
                                    to={routeName}
                                    className={navLink =>
                                        "hover" + (navLink.isActive ? " active" : "")
                                    }
                                >
                                    {name.toUpperCase()}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div id='socials-container'>
                <a href='changethis'>Facebook</a>
                <a href='changethis'>Whatsapp</a>
            </div>
        </div>
    );
}