import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <p style={{fontSize: '70%', opacity: '.5'}}>© { ( new Date().getFullYear() ) } bianca & brian</p>
        </div>
    );
};

export default Copyright;
