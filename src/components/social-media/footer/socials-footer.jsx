import React from 'react';

import { ReactComponent as Facebook } from '../../../assets/static/socials/facebook.svg';
import { ReactComponent as Whatsapp } from '../../../assets/static/socials/whatsapp.svg';

// Stylesheet
import './socials-footer.scss';

const SocialsFooter = () => {
    return (
        <div id='socials-container'>
            <div id='socials-link'>
                <a href='https://www.facebook.com/' className='socials'>
                    <Facebook className='facebook'/>
                </a>
                <a href='https://www.facebook.com/' className='socials'>
                    <Whatsapp className='whatsapp'/>
                </a>
            </div>
            <p id='copyright-text'>TOM WINTLE <b id='copyright-icon'>&copy;2022</b></p>
        </div>
    )
};

export default SocialsFooter;