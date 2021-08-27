import React from 'react';

const BackToHome = () => {
    return (
        <div className="button">
            <a title="Back to homepage" className="btn btn-outline-primary text-uppercase" href={ process.env.PUBLIC_URL + "/" }>Back to home</a>
        </div>
    );
};

export default BackToHome;
