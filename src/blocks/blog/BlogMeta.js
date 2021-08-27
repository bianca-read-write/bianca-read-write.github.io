import React from 'react';

const BlogMeta = () => {
    return (
        <div className="meta">
            <p>
                <span><a href={ process.env.PUBLIC_URL + "/blog" }>By admin</a></span>
                <span>-</span>
                <span>Comments (1)</span>
                <span>-</span>
                <span className="category"><a title="Wedding" href={ process.env.PUBLIC_URL + "/blog" }>Wedding</a></span>
            </p>
        </div>
    );
};

export default BlogMeta;