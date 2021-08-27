import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <p>© { ( new Date().getFullYear() ) } Wedding Photography React JS Template by <a href="https://www.adveits.com">Adveits</a></p>
        </div>
    );
};

export default Copyright;
