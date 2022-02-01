import React from 'react';

// Stylesheet
import './socials-footer.scss';

const SocialsFooter = () => {
    return (
        <div id='socials-container'>
            <div id='socials-link'>
                <a href='https://www.facebook.com/' className='socials facebook'>Facebook</a>
                <a href='https://www.facebook.com/' className='socials whatsapp'>Whatsapp</a>
            </div>
            <p id='copyright-text'>TOM WINTLE <i id='copyright-icon'>&copy;2022</i></p>
        </div>
    )
};

export default SocialsFooter;