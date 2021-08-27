import React from 'react';

const BlogTags = () => {
    return (
        <div className="tags">
            <p>
                <a title="Wedding" href={ process.env.PUBLIC_URL + "/blog" }>Wedding</a>
                <a title="Anniversary" href={ process.env.PUBLIC_URL + "/blog" }>Anniversary</a>
                <a title="Honeymoon" href={ process.env.PUBLIC_URL + "/blog" }>Honeymoon</a>
            </p>
        </div>
    );
};

export default BlogTags;