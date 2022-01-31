// Default react import
import React from 'react';

// Components
import ContactWithBusinessInformation from '../contact/contact-with-business-information';
import SocialsFooter from '../social-media/socials-footer';

// Style sheet 
import './footer.scss';

export default function Footer() {
    return (
        <div id="footer-container">
            <i id='chevron' />
            <ContactWithBusinessInformation />
            <SocialsFooter />
        </div>
    );
}