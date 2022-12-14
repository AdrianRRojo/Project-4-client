import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Navbar from './components/partials/Navbar'
import EditProfile from './components/pages/EditProfile'
import Home from './components/pages/Home'
import News from './components/pages/News'

import './App.css'
import jwt_decode from 'jwt-decode'


function App() {
  // the currently logged in user will be stored up here in state
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('jwt')? jwt_decode(localStorage.getItem('jwt')): null)
  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }

  return (
    <Router>

        <Navbar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
       
      
      <div className="App">
        <Routes>
          <Route 
            path="/register"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path="/Login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          {/* conditionally render auth locked routes */}
          <Route 
            path="/:username"
            element={currentUser ? <Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/" />}
          />

           <Route 
            path="/:username/edit"
            element={currentUser ? <EditProfile handleLogout={handleLogout}/> : <Navigate to="/" />}
          />
            <Route 
              path = "/"
              element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser} />}
            />
           <Route 
            path="/*"
            element={<Navigate to="/" />}
          /> 
          <Route 
          path="/news"
          element={<News />}
        />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
