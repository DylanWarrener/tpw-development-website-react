// React
import React, { Component } from 'react';

// Components 
import CustomFormInput from '../form/elements/input/input';
import CustomSubmitButton from '../form/buttons/submit-button';
import CustomTextarea from '../form/elements/textarea/textarea';

// Stylesheet
import './contact-with-business-information.scss';

class ContactFooterWithBusinessInformation extends Component {

    handleChange = event => {

    }
    
    render() {
        return (
            <div id='contact-container'>
                <h1 id='title'>CONTACT</h1>
                <h3 id='subtitle'>Have a question or want to build a new home today?</h3>
                <div id='contact-elements'>
                    <form id='form-container'>
                        <CustomFormInput 
                            name='fullname'
                            type='text'
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomFormInput 
                            name='email'
                            type='email'
                            handleChange={this.handleChange}
                            required
                        />
                        <CustomFormInput 
                            name='number'
                            type='tel'
                            handleChange={this.handleChange}
                            pattern='[0-9]{11}'
                            required
                        />
                        <CustomTextarea name='message' />
                        <CustomSubmitButton type='submit'>SUBMIT</CustomSubmitButton>
                    </form>
                    <aside id='contact-information'>
                        This is the contact information
                    </aside>
                </div>
            </div>
        );
    }
}

export default ContactFooterWithBusinessInformation;