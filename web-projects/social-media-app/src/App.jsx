import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm addPost={addPost} />
      <Feed posts={posts} />
    </div>
  );
}

export default App;
