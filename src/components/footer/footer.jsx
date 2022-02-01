// Default react import
import React from 'react';

// Components
import ContactWithBusinessInformation from '../contact/contact-with-business-information';
import SocialsFooter from '../social-media/footer/socials-footer';

// Style sheet 
import './footer.scss';

const Footer = () => {
    return (
        <div id="footer-container">
            <ContactWithBusinessInformation />
            <SocialsFooter />
        </div>
    );
}

export default Footer;