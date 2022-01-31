import React from 'react';

// Custom navigation 
import NavigationWithLogoAndSocials from '../navigation/navigation-with-logo-and-socials';

// Style sheet  
import './header.scss';

const Header = () => {
    return (
        <div id='header-container'>
            <NavigationWithLogoAndSocials />
        </div>
    );
}

export default Header; 