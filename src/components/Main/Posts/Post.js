import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { TfiClose } from 'react-icons/tfi';
import EditForm from './EditForm/EditForm';




const Post = ({title, body, id, deletePost, index, posts, editPost}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState({})

  function openEditForm(id) {
    setIsEdit(!isEdit)
    let currentPost = posts.find(post => post.id === id)
    setEditData({title: currentPost.title, text: currentPost.body})
  }
  function closeEditForm() {
    setIsEdit(!isEdit)
    setEditData({})
  }



  return (
    <div className='post'>
        <div className='post__title'>
            {index + 1}
            <h4>{title}</h4>
        </div>
        <p>{body}</p>
        <AiOutlineDelete onClick={() => deletePost(id)} style={{cursor: 'pointer', position: "absolute", top: '15px', right: "10px"}} />
        {isEdit ? 
          <TfiClose onClick={closeEditForm} style={{cursor: 'pointer', position: "absolute", top: '50px', right: "10px"}} /> : <FiEdit2 onClick={() => openEditForm(id)} style={{cursor: 'pointer', position: "absolute", top: '50px', right: "10px"}} />}
       
        {isEdit && <EditForm isEdit={isEdit} setIsEdit={setIsEdit} editPost={editPost} id={id} setEditData={setEditData}  editData={editData}  />}  
    </div>
  )
}

export default Post