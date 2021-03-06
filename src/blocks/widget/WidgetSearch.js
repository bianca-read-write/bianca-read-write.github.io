import React from 'react';

import ButtonSearch from '../../components/button/ButtonSearch';

const WidgetSearch = () => {
    return (
        <div className="widget widget_search">
            <form className="search-form" role="search" method="get" action={ process.env.PUBLIC_URL + "/search-results" }>
                <div className="search input-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Search" name="s" />

                    <div className="input-group-append">
                        <ButtonSearch />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
