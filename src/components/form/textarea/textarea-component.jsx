import React from 'react';

// Stylesheet
import './textarea-component.scss';

const CustomTextarea = ({ placeholder, name }) => {
    return (
        <textarea 
            className='text-area'
            placeholder={placeholder}
            name={name}
        />
    );
}

export default CustomTextarea;