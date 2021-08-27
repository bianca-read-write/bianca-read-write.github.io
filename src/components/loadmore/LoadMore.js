import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreButton = () => {
    return (
        <div className="loadmore spacer m-top-lg">
            <Link to="header"
                  title="Load more"
                  spy={ true }
                  duration={ 300 }
                  className="btn btn-outline-primary text-uppercase"
                  href="#header"
            >
                Load more
            </Link>
        </div>
    );
};

export default LoadMoreButton;
