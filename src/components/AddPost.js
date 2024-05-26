import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Textarea from '@mui/joy/Textarea';

function AddPost({addPost}) {

  const [postContent, setPostContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault() 
    if(postContent.trim()){
      addPost(postContent)
      setPostContent('')
    } 
  }

  return (
    <div className='add-post'>
        <form onSubmit={handleSubmit}>
            <div className='text-area'>
              <Textarea
                name='Outlined'
                size='md'
                variant='outlined' 
                value={postContent} 
                onChange={(e)=>setPostContent(e.target.value)} 
                placeholder='Write Something...'
              />
            </div>
            <Button variant='contained' type='submit'>
                Post
            </Button>
        </form>
    </div>
  )
}

export default AddPost