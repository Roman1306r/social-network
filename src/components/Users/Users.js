import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Loader from '../../common/Loader/Loader';
import User from './User/User';
import UsersPagination from './UsersPagination/UsersPagination';



const Users = ({users, totalCount, page, getCurrentPage, getUsers}) => {
  
  const [load, setLoad] = useState(false)
  const usersArray = users.map(user => <User key={user.id} {...user} />)
  const [portionNumber, setPortionNumber] = useState(1)
  const location = useLocation()

  useEffect(() => {
    getUsers()
  }, [location])

  return (<div className='users'>
            <h2>Users <span>Total users: {totalCount}</span></h2>
            <p>You can view the user's profile, add/remove him from friends, view the status. Navigate through the pages to view more users.</p>
            {!users.length || load && <Loader />}
            {!!users.length && !load && <>
                                <UsersPagination portionNumber={portionNumber} setPortionNumber={setPortionNumber} getCurrentPage={getCurrentPage} page={page} totalCount={totalCount}  setLoad={setLoad} />
                                <div className='users__container'>
                                {usersArray}
                                </div></>  }
          </div>
)
}

export default Users