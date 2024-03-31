import React from 'react';
import Post from './Post';

function Feed({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} content={post.content} />
      ))}
    </div>
  );
}

export default Feed;
