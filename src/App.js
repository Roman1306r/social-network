import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile'
import Contacts from './components/Contacts/Contacts';
import Users from './components/Users/Users';
import { restAPI } from './api/api';
import ErrorPage from './common/Error/ErrorPage';
import LoginPage from './components/LoginPage/LoginPage';
import Loader from './common/Loader/Loader';



function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [users, setUsers] = useState([])
  const [isError, setIsError] = useState(false)
  const [totalCount, setTotalCount] = useState(0)
  const [page, setPage] = useState(1)
  const [profile, setProfile] = useState({})
  const [profileId, setProfileId] = useState(28671)
  const [meId, setMeId] = useState(0)
  const [isAuth, setIsAuth] = useState(false)
  


  const getUsers = async () => {
    const data = await restAPI.getUsers(setIsError, page)
    if(data) {
      setUsers(data.items)
      setTotalCount(data.totalCount)
    } 
  }
  const getCurrentPage = async(page) => {
    setPage(page)
    const data = await restAPI.getUsers(setIsError, page)
    if(data) setUsers(data.items)
  }
  const getProfile = async(id) => {
    const data = await restAPI.getProfile(setIsError, id)
    if(data) setProfile(data)
  }
  const checkAuth = async() => {
    const data = await restAPI.checkAuth()
    if(data.resultCode === 1) console.log(`Error: ${data.messages[0]}`)
    else {
      setIsAuth(true)
      setProfileId(data.data.id)
    }
  }
  

  useEffect(() => {
    getUsers() 
  }, [])
  useEffect(() => {
    checkAuth()
    setMeId(profileId)
  }, [isAuth])

  

  return (
    <HashRouter>
      <div className={darkMode ? 'App dark' : 'App'}>
          <Header meId={meId} setIsAuth={setIsAuth} isAuth={isAuth} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Sidebar />
          {isError && <ErrorPage setIsError={setIsError} />}  
          {!isAuth ? <LoginPage getProfile={getProfile} setProfileId={setProfileId} setIsAuth={setIsAuth} /> : 
          <Suspense fallback={<Loader />}>
              <Routes>  
                  <Route path='/posts' element={<Main setIsError={setIsError} />}  />
                  <Route path='/' element={<Main setIsError={setIsError} />}  />
                  <Route path='/profile/:userId?' element={<Profile meId={meId} profileId={profileId} profile={profile} getProfile={getProfile} setProfileId={setProfileId} />}  />
                  <Route path='/contacts' element={<Contacts />}  />
                  <Route path='/users' element={<Users getUsers={getUsers} getCurrentPage={getCurrentPage} page={page} totalCount={totalCount} users={users}  />}  />
                  <Route path='*' element={<ErrorPage setIsError={setIsError} />}  />
              </Routes> 
          </Suspense> }    
      </div>
    </HashRouter>
  );
}

export default App;
