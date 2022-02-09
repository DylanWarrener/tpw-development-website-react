import React, { Component } from "react";

// React router dom
import { Link } from "react-router-dom";

// Components
import CustomFormInput from "../form/input/input-component";
import CustomSubmitButton from "../form/buttons/submit_button-component";
import CustomTextarea from "../form/textarea/textarea-component";

// Stylesheet
import "./contact-component.scss";

class ContactFooterWithBusinessInformation extends Component {
  render() {
    return (
      <div id="contact-container">
        <Link className="title" to="contact">
          CONTACT
        </Link>
        <h3 className="subtitle">
          Have a question or want to build a new home today?
        </h3>
        <div id="contact-elements">
          <form id="form-container">
            <CustomFormInput
              placeholder="Name"
              name="fullname"
              type="text"
              required
            />
            <CustomFormInput
              placeholder="Enter email"
              name="email"
              type="email"
              required
            />
            <CustomFormInput
              placeholder="Phone number"
              name="number"
              type="tel"
              pattern="[0-9]{11}"
              required
            />
            <CustomTextarea placeholder="Your message" name="message" />
            <CustomSubmitButton type="submit">SUBMIT</CustomSubmitButton>
          </form>
          {/*
                    <aside id='contact-information'>
                        <div className='container'>
                            <img className='contact-svg' src={PhoneAccent} alt='phone'/>
                            <p>07464599396</p>
                        </div>
                        <div className='container'>
                            <img className='contact-svg' src={EmailAccent} alt='phone'/>
                            <p>dryanwarrener@gmail.com</p>
                        </div>
                        <div className='container'>
                            <img className='contact-svg' src={TimeAccent} alt='phone'/>
                            <p>Mon - Fri: 8AM - 6PM <br></br>Sat: 9AM - 1PM</p>
                        </div>
                        <div className='container'>
                            <img className='contact-svg' src={LocationAccent} alt='phone'/>
                            <p>07464599396</p>
                        </div>
                    </aside>
                    */}
        </div>
      </div>
    );
  }
}

export default ContactFooterWithBusinessInformation;
