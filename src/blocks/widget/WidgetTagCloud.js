import React from 'react';

const WidgetTagCloud = () => {
    return (
        <div className="widget widget_tag_cloud">
            <h5 className="widget-title">Tags</h5>

            <div className="tagcloud">
                <a title="Honeymoon" href={ process.env.PUBLIC_URL + "/blog" } className="tag-cloud-link">Honeymoon</a>
                <a title="Anniversary" href={ process.env.PUBLIC_URL + "/blog" } className="tag-cloud-link">Anniversary</a>
                <a title="Wedding" href={ process.env.PUBLIC_URL + "/blog" } className="tag-cloud-link">Wedding</a>
                <a title="Flowers" href={ process.env.PUBLIC_URL + "/blog" } className="tag-cloud-link">Flowers</a>
            </div>
        </div>
    );
};

export default WidgetTagCloud;
