import React from 'react';

const ContactsList = () => {
    return (
        <div id="contacts" className="block">
            <div className="row gutter-width-md with-pb-sm">
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="contacts-item">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/demo/05_img.png" alt="Location" />
                            </div>
                        </div>

                        <div className="contacts-item-content">
                            <h3 className="contacts-item-title after">Location</h3>
                            <p className="contacts-item-description">575 Crescent Ave. Quakertown, PA 18951</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="contacts-item">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/demo/06_img.png" alt="Phone no." />
                            </div>
                        </div>

                        <div className="contacts-item-content">
                            <h3 className="contacts-item-title after">Phone no.</h3>
                            <p className="contacts-item-description"><a href="tel:+7193384628">719-338-4628</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div className="contacts-item">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <img src="assets/img/demo/07_img.png" alt="Email" />
                            </div>
                        </div>

                        <div className="contacts-item-content">
                            <h3 className="contacts-item-title after">Email</h3>
                            <p className="contacts-item-description"><a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsList;
