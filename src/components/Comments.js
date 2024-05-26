// src/components/Comments.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';
import './Comments.css'

const Comments = ({ postId, comments, addComment }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(postId, comment);
      setComment('');
    }
  };

  return (
    <div className='comments'>
      <div className='comments-list'>
        {comments.map((comment, idx) => (
          <div key={idx} className='comment'>
            {comment}
          </div>
        ))}
      </div>
      <form onSubmit={handleAddComment} className='comment-form'>
        <Textarea
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Add a comment...'
          className='comment-input'
        />
        <Button variant='contained' type='submit' className='comment-btn'>
            Comment
        </Button>
      </form>
    </div>
  );
};

export default Comments;
