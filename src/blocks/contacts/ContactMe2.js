import React from 'react';

import ContactForm from '../../components/form/ContactForm';

const ContactMe2 = () => {
    return (
        <div className="contact-me">
            <div className="contact-me-img-and-title">
                <div className="img object-fit">
                    <div className="object-fit-cover">
                        <img src="assets/img/edwards/9Y7A3248.jpg" alt="Contacts" />
                    </div>
                </div>

                <h2 className="contact-me-title">RSVP</h2>
            </div>

            <div className="contact-me-content">
                <div className="contact-me-content-2">
                    <div className="contact-me-description">
                        <p>Please let us know if you plan to attend by March 1st, 2022</p>
                    </div>

                    <div className="contact-me-shortcode">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe2;
