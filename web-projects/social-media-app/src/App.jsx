import React from 'react';
import Post from './components/Post'; // This imports the Post component from the specified path

function App() { // Corrected function declaration
    return (
        <div>
            <h1>Fakebook!</h1>
      
            {/* These comments indicate where you might add more components in the future */}
            {/* CreatePostForm */}
            {/* Feed */}

            <Post /> {/* This is where the Post component is used in the JSX */}
        </div>
    );
}

export default App; // This exports the App component as the default export of this module
