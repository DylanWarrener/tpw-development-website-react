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
import NAV_DATA from '../../data/navigation';

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
                        Object.keys(NAV_DATA).map((key, index) => (
                            <li key={NAV_DATA[key].id}>
                                <NavLink 
                                    to={NAV_DATA[key].routeName}
                                    className={navLink =>
                                        "hover" + (navLink.isActive ? " active" : "")
                                    }
                                >
                                    {NAV_DATA[key].title}
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