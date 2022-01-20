// React
import React from 'react';

// Stylesheet
import './input.scss';

export default function CustomFormInput(props) {
    return (
        <input className='input'
            name={props.name}
            type={props.type}
            handleChange={props.handleChange}
            pattern={props.pattern}
            required
        ></input>
    );
}