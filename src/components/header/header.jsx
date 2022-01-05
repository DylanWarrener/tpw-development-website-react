// Default react import
import React from 'react';

// React router links
import { Link } from 'react-router-dom';

// Logo and social media SVG import
import { 
    Facebook, 
    Whatsapp, 
    Logo 
} from '../../assets/assets';


// Style sheet  
import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img src={Logo} alt='TPW electrical Logo'/>
            </Link>
            <div className='nav-links-container'>
                <ul className='nav-links'>
                    <li><Link className='hover' to='/'>Home</Link></li>
                    <li><Link className='hover' to='/about'>About</Link></li>
                    <li><Link className='hover' to='/location'>Location</Link></li>
                    <li><Link className='hover' to='/expertise'>Expertise</Link></li>
                    <li><Link className='hover' to='/portfolio'>Portfolio</Link></li>
                    <li><Link className='hover' to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className='socials-container'>
                hello
            </div>
        </div>
    );
}