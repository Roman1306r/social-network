import React from 'react'
import Button from '../../../../common/Button/Button'



const EditForm = ({editData, setEditData, editPost, id, setIsEdit}) => {

    const editPostHandler = (event) => {
        event.preventDefault()
        if(!editData.title || !editData.text) return alert('Enter title or text')
        editPost(id, editData)
        setIsEdit(false)
        setEditData({})
    }


  return (
    <form onSubmit={editPostHandler} className='edit__form'>
        <div className='form__body'>
            <div className='form__title'>
                <p>Title</p>
                <input onChange={(event) => setEditData({...editData, title: event.target.value})} value={editData.title} type="text" placeholder="Enter title" />
            </div>
            <div className='form__title'>
                <p>Text</p>
                <textarea onChange={(event) => setEditData({...editData, text: event.target.value})} value={editData.text}  placeholder="Enter text" />
            </div>
        </div> 
        <Button children="Edit post" />
    </form>
  )
}

export default EditForm