// Default react import
import React from 'react';

// Components
import ContactWithBusinessInformation from '../contact/contact-with-business-information';
import SocialMediaLinks from '../social-media/social-media';

// Style sheet 
import './footer.scss';

export default function Footer() {
    return (
        <div id="footer-container">
            {/* <i id='chevron' /> */}
            <div id='footer-panel'>
                <ContactWithBusinessInformation />
                <SocialMediaLinks />
            </div>
        </div>
    );
}