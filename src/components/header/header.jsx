// Default react import
import React from 'react';

// Custom navigation 
import NavigationWithLogoAndSocials from '../navigation/navigation-with-logo-and-socials';

// Style sheet  
import './header.scss';

export default function Header() {
    return (
        <div id='header-container'>
            <NavigationWithLogoAndSocials />
        </div>
    );
}