import React from 'react';

function Comment(props) {
  return (
    <div>
      <p>{props.content}</p> {/* This line uses the content prop */}
    </div>
  );
}

export default Comment;
