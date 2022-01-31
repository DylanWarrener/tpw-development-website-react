// React
import React from 'react';

// Stylesheet
import './textarea.scss';

export default function CustomTextarea({ placeholder, name }) {
    return (
        <textarea 
            className='text-area'
            placeholder={placeholder}
            name={name}
        />
    );
}