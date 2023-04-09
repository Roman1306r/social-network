import React, { useEffect, useState } from 'react'
import { restAPI } from '../../../api/api'
import Loader from '../../../common/Loader/Loader'
import Post from './Post'
import PostForm from './PostForm/PostForm'



const Posts = ({setIsError}) => {

    const [posts, setPosts] = useState([])
    const [formData, setFormData] = useState({title: '', text: ''})


    const getPosts = async () => {
        const result = await restAPI.getPosts(setIsError)
        if(result) setPosts(result.filter((_, index) => index < 10))
    }
    const deletePost = (id) => {
        let filteredPosts = posts.filter(post => post.id !== id)
        setPosts([...filteredPosts]) 
    }  
    const addPost = (title, text) => {
        let newPost = { id: Date.now(), title, body: text}
        setPosts(prev => [newPost, ...prev]) 
    }
    const editPost = (id, data) => {
        let editedPost = posts.find(post => post.id === id)
        setPosts(prev => {        
            let editedIndex = posts.findIndex(post => post.id === id)
            prev.splice(editedIndex, 1)
            return [ {...editedPost, title: data.title, body: data.text},  ...prev]
        } ) 
    } 

    useEffect(() => {
        getPosts()
    }, [])
    const postsArray = posts.map((post, index) => <Post editPost={editPost} posts={posts}  index={index} deletePost={deletePost} key={post.id} {...post} />)



  return (
    <div className='posts'>
        <h2>Posts</h2>
        <p>You can add, edit and delete posts</p>
        <PostForm  addPost={addPost} formData={formData} setFormData={setFormData} />
        <div className='posts__container'>
            {!posts.length && <Loader />}
            {!!posts.length && <div className='posts__body'>{postsArray}</div>}
        </div>
    </div>
  )
}

export default Posts