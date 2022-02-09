import React from 'react';

// Custom navigation 
import NavigationWithLogoAndSocials from '../navigation/navigation_with_logo_and_socials-component';

// Style sheet  
import './header-component.scss';

const Header = ({ logo }) => {
    return (
        <div id='header-container'>
            <NavigationWithLogoAndSocials logo={logo}/>
        </div>
    );
}

export default Header; 