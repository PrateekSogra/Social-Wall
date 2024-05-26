// src/components/Post.js
import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import DeleteIcon from '@mui/icons-material/Delete';
import Comments from './Comments';
import './Post.css'

function Post({ post, likePost, commentPost, deletePost }) {

  const [displayComments, setDisplayComments] = useState(false)
  const [comments, setComments] = useState(post.comments || [])

  const handleCommentButton = () => {
    setDisplayComments(!displayComments);
  }

  const addComment = (postId, comment) => {
    setComments([...comments, comment]);
    commentPost(postId, comment)
  }

  return (
    <div className='post'>
      <div className='post-content'>
        <p>{post.content}</p>
      </div>
      <div className='post-options'>
        <ThumbUpIcon onClick={() => likePost(post.id)} />
        <AddCommentIcon onClick={handleCommentButton} />
        <DeleteIcon onClick={() => deletePost(post.id)} />
      </div>
      {displayComments && (
        <Comments postId={post.id} comments={comments} addComment={addComment} />
      )}
    </div>
  );
}

export default Post;
