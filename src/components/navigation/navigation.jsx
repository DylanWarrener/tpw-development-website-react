// Default react 
import React from 'react';

// React router links
import { Link, useLocation } from 'react-router-dom';

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

    const test = NAVIGATION_DATA.map(nav => nav);
    //console.log(test);

    const ActiveLink = props => {
        return (
            <Link className={props.className} to={props.routeName}>
                {props.name}
            </Link>
        );
    };

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
                                {
                                    (location.pathname === routeName)
                                    ? 
                                    <ActiveLink 
                                        className='hover active' 
                                        routeName={routeName}
                                        name={name.toUpperCase()}
                                    />
                                    :
                                    <ActiveLink 
                                        className='hover' 
                                        routeName={routeName} 
                                        name={name.toUpperCase()}
                                    />
                                }
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