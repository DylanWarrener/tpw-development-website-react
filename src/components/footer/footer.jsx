// Default react import
import React from 'react';

// Contact component 
import SocialMedia from '../social-media/social-media';

// Style sheet 
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <section>
                <i className='outer-chevron'>
                    <i className="inner-chevron"></i>
                </i>
                <div className='footer-panel'>
                    This is the footer
                </div>
            </section> 
        </div>
    );
}