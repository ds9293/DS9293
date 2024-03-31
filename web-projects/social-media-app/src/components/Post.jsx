import React from 'react';
import Comment from './Comment';

function Post() {
    return (
        <div>
            <h3>Test Post</h3>
            <p>This is a test post we'll edit later!</p>
            <p>Likes: 30</p>
            <p>Comments:</p>
            <Comment />
        </div>
    );
}

export default Post;
