import React from 'react';

const WidgetCategories = () => {
    return (
        <div className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>

            <ul>
                <li className="cat-item">
                    <a title="Wedding" href={ process.env.PUBLIC_URL + "/blog" }>Wedding</a>
                </li>

                <li className="cat-item">
                    <a title="Anniversary" href={ process.env.PUBLIC_URL + "/blog" }>Anniversary</a>
                </li>

                <li className="cat-item">
                    <a title="Honeymoon" href={ process.env.PUBLIC_URL + "/blog" }>Honeymoon</a>
                </li>

                <li className="cat-item">
                    <a title="Flowers" href={ process.env.PUBLIC_URL + "/blog" }>Flowers</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
