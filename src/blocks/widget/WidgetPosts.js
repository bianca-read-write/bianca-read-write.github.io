import React from 'react';

import RecentEntries from '../../data/blog/blogRecentEntries';

const WidgetPosts = () => {
    return (
        <div className="widget widget_recent_entries">
            <h5 className="widget-title"><span className="widget-line"></span>Recent posts</h5>

            <ul className="list-unstyled items">
                { RecentEntries && RecentEntries.map( ( entry, key ) => {
                    return (
                        <li key ={ key } className="item">
                            <div className="row gutter-width-xs">
                                <div className="col-3">
                                    <a href={ process.env.PUBLIC_URL + entry.link }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img src={ entry.imgSrc } alt={ entry.title } />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-9 align-self-center">
                                    <p className="item-t-head"><a title={ entry.title } href={ process.env.PUBLIC_URL + entry.link }>{ entry.title }</a></p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default WidgetPosts;
