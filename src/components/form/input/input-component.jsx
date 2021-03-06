import React from 'react';

// Stylesheet
import './input-component.scss';

const CustomFormInput = ({ placeholder, name, type, pattern}) => {
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

export default CustomFormInput;