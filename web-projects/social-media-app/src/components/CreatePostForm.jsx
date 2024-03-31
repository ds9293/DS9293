import React, { useState } from 'react';

function CreatePostForm({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if title or content is empty
        if (!title.trim() || !content.trim()) {
            setError('Title and content cannot be empty.');
            return; // Prevent the form from being submitted
        }

        // If validation passes, proceed to add the post
        addPost({ title, content });

        // Reset form fields and error message
        setTitle('');
        setContent('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePostForm;
