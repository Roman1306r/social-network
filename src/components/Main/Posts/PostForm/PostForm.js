import React from 'react'
import Button from '../../../../common/Button/Button'

const PostForm = ({formData, setFormData, addPost}) => {

    const submitFormHandler = (event) => {
        event.preventDefault()
        if(!formData.title || !formData.text) return alert('Enter title or text')
        addPost(formData.title, formData.text)
        setFormData({title: '', text: ''})
    }


  return (
    <form onSubmit={submitFormHandler} className='post__form'>
        <div className='form__body'>
            <div className='form__title'>
                <p>Title</p>
                <input onChange={(event) => setFormData({...formData, title: event.target.value})} value={formData.title} type="text" placeholder="Enter title" />
            </div>
            <div className='form__title'>
                <p>Text</p>
                <textarea onChange={(event) => setFormData({...formData, text: event.target.value})} value={formData.text}  placeholder="Enter text" />
            </div>
        </div> 
        <Button children="Add post" />
    </form>
  )
}

export default PostForm