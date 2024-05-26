import React, { useState } from 'react'
import Post from './Post'
import AddPost from './AddPost';

function Feed() {
    const [posts, setPosts] = useState([])

    const addPost = (content) => {
        setPosts([{ id: Date.now(), content }, ...posts]);
    }
    
    const likePost = (postId) => {
        console.log('Liked post:', postId);
    }

    const commentPost = (postId) => {
        console.log('Commented on post:', postId);
    }

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    }

    
  return (
    <div className='feed'>
        <AddPost addPost={addPost}/>
        <div className='posts'>
            {
                posts.map(post=>{
                    return(
                        <Post
                            key={post.id}
                            post={post}
                            likePost={likePost}
                            commentPost={commentPost}
                            deletePost={deletePost}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Feed