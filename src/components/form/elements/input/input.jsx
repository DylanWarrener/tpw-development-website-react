// React
import React from 'react';

// Stylesheet
import './input.scss';

export default function CustomFormInput({ placeholder, name, type, pattern}) {
    return (
        <input 
            className='input'
            placeholder={placeholder}
            name={name}
            type={type}
            pattern={pattern}
            required
        />
    );
}