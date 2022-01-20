import React from 'react';
import { NavLink } from 'react-router-dom';

// Social media component
import SocialMedia from '../social-media/social-media';

// Logo and social media SVG 
import { 
    Facebook, 
    Whatsapp, 
    Logo 
} from '../../assets/assets';

// Navagational data
import NAVIGATION_DATA from '../../data/navigation';

// Stylesheet 
import './navigation-with-logo-and-socials.scss';

export default function Navigation() {
    return (
        <div id='nav-container'>
            <NavLink id='logo-container' to='/'>
                <img id='logo' src={Logo} alt='logo'/>
            </NavLink>
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
                <SocialMedia />
            </div>
        </div>
    );
}