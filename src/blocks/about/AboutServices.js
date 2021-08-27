import React from 'react';

import ServiceData from '../../data/services/servicesData';

const AboutServices = () => {
    return (
        <div className="row gutter-width-md with-pb-sm">
            { ServiceData && ServiceData.map( ( item, key ) => {
                return (
                    <div key={ key } className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <div className="service-item">
                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src={ item.imgSrc } alt={ item.title } />
                                </div>
                            </div>

                            <div className="img-bg-color"></div>

                            <h5 className="service-item-title">{ item.title }</h5>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AboutServices;