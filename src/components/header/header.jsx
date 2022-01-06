// Default react import
import React from 'react';

// Navigation 
import Navigation from '../navigation/navigation';

// Style sheet  
import './header.scss';

export default function Header() {
    return (
        <div id='header'>
            <Navigation />
        </div>
    );
}