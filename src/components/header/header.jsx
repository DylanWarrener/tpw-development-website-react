// Default react import
import React from 'react';

// Navigation 
import NavigationWithLogoAndSocials from '../navigation/navigation-with-logo-and-socials';

// Style sheet  
import './header.scss';

export default function Header() {
    return (
        <div id='header'>
            <NavigationWithLogoAndSocials />
        </div>
    );
}