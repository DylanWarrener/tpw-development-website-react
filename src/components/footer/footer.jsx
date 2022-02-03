// Default react import
import React from 'react';

// Components
import ContactWithBusinessInformation from '../contact/contact-with-business-information';
import SocialsFooter from '../social-media/footer/socials-footer';

// Icon 
import { ReactComponent as ArrowUp } from '../../assets/static/icons/arrow-up.svg';

// Style sheet 
import './footer.scss';

const Footer = ({ socials }) => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id="footer-container">
            <ContactWithBusinessInformation />
            <button id='back-to-top-container' onClick={backToTop}>
                <ArrowUp id='up-arrow'/>
            </button>
            <SocialsFooter socials={socials} />
        </div>
    );
}

export default Footer;