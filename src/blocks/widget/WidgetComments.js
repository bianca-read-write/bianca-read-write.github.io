import React from 'react';

const WidgetComments = () => {
    return (
        <div className="widget widget_recent_comments">
            <h5 className="widget-title"><span className="widget-line"></span>Recent Comments</h5>
            
            <ul id="recentcomments">
                <li className="recentcomments">
                    <span className="comment-author-link">Tommy Andersen</span> on
                    <a title="Tommy Andersen" href={ process.env.PUBLIC_URL + "/blog-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Rosie Ford</span> on
                    <a title="Rosie Ford" href={ process.env.PUBLIC_URL + "/blog-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Arthur Hopin</span> on
                    <a title="Arthur Hopin" href={ process.env.PUBLIC_URL + "/blog-single-post#comments" }>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetComments;
