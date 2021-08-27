import React from 'react';

import ClientsList from '../../data/about/clientsList';

const AboutClients = () => {
    return (
        <div id="clients" className="block spacer p-top-xl">
            <div className="bg-light-full-width clients-bottom-no-space">
                <div className="clients">
                    <div className="clients-items">
                        { ClientsList && ClientsList.map( ( client, key ) => {
                            return (
                                <div key={ key } className="clients-item">
                                    <div className="clients-item-content">
                                        <img src={ client.imgSrc } alt={ client.alt } />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutClients;
