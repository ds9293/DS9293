import React, { useState } from 'react';
import Comment from './Comment';

function Post() {
  // Initialize likes using useState
  const [likes, setLikes] = useState(30);

  // Update the likes state when the button is clicked
  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3>Test Post</h3>
      <p>This is a test post we'll edit later!</p>
      <p>Likes: {likes}</p> {/* Display the likes from state */}
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />
    </div>
  );
}

export default Post;
