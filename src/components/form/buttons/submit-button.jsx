// React
import React from 'react';

// Stylesheet
import './submit-button.scss';

const CustomSubmitButton = (props, { type }) => {
    return (
        <button className='button' type={type}>
            {props.children}
        </button>
    );
}

export default CustomSubmitButton;