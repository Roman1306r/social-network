import React from 'react'
import History from './History/History'
import Posts from './Posts/Posts'

const Main = ({setIsError}) => {


  return (
    <div className='main'>
        <Posts setIsError={setIsError} />
        <History />
    </div>
  )
}

export default Main