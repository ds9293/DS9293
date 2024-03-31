import React from 'react';
import Comment from './Comment';

function Post() {
  let likes = 30;

  function handleLike() {
    console.log('Liked!');
  }

  return (
    <div>
      <h3>Test Post</h3>
      <p>This is a test post we'll edit later!</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />
    </div>
  );
}

export default Post;
