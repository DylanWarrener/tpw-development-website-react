// React
import React from 'react';

// Stylesheet
import './submit-button.scss';

export default function CustomSubmitButton(props) {
    return (
        <button className='button' type={props.type}>
            {props.children}
        </button>
    );
}