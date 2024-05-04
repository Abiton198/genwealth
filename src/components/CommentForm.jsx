// CommentForm.js
import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: comment }), // Send the comment as JSON data
    });
    if (response.ok) {
      console.log('Comment submitted successfully');
    } else {
      console.error('Failed to submit comment');
    }
    setComment('');
  };

  return (
    <div className='mt-10'>
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default CommentForm;
