import React, { useState, useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './index.css'
import Users from './user/pages/Users.jsx'
import BookAppointment from './drs/pages/BookAppointment.jsx'
import Doctors from './drs/pages/Doctors.jsx'
import MainNavigation from './shared/components/Navigation/MainNavigation.jsx'
import SignUp from './user/pages/SignUp.jsx'
import SignIn from './user/pages/SignIn.jsx'
import { AuthContext } from './shared/context/auth-context.js'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/:slid/appointments" element={<BookAppointment />} />
        <Route
          path="*"
          element={<Navigate to="/doctors" replace />}
        />
        {/* <Navigate to='/' element={<Users />} /> */}
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route
          path="*"
          element={<Navigate to="/doctors" replace />}
        />
        {/* <Navigate to='/singup' element={<SignIn />} /> */}
      </>
    );
  }

  return (<>
    <React.StrictMode>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        <BrowserRouter>
          <MainNavigation />
          <main className='container'>
            <Routes>
              {routes}
            </Routes >
          </main>
        </BrowserRouter>
      </AuthContext.Provider>
    </React.StrictMode>
  </>)

}

export default App
