import React from 'react';

import './test.scss';

export default function Test() {
    return (
        <div>
            <img 
                id='home' 
                className='animated-chevron' 
                src='./assets/animated/chevron/chevron.svg'
                alt='home'
            >
                chevron
            </img>
            <div className='main'>This can be left unchanged</div>
        </div>
    );
}