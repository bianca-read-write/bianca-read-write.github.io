import React from 'react';
import { Link } from 'react-scroll/modules';

const CommentsReply = () => {
    return (
        <div className="comment-reply no-space">
            <Link
                title="Reply"
                className="comment-reply-link btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase before scroll-to-id"
                to="reply-title"
                spy={ true }
                duration={ 900 }
                href="#"
            >
                Reply
            </Link>
        </div>
    );
};

export default CommentsReply;
