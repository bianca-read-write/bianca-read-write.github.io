import React from 'react';

import ContactForm from '../../components/form/ContactForm';

const ContactMe2 = () => {
    return (
        <div className="contact-me">
            <div className="contact-me-img-and-title">
                <div className="img object-fit">
                    <div className="object-fit-cover">
                        <img src="assets/img/placeholder/1600x700.jpg" alt="Contacts" />
                    </div>
                </div>

                <h2 className="contact-me-title">Contact me</h2>
            </div>

            <div className="contact-me-content">
                <div className="contact-me-content-2">
                    <div className="contact-me-description">
                        <p>Fill up a form below.</p>
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
