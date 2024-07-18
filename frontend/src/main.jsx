import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Users from './user/pages/Users.jsx'
import BookAppointment from './drs/pages/BookAppointment.jsx'
import Doctors from './drs/pages/Doctors.jsx'
import MainNavigation from './shared/components/Navigation/MainNavigation.jsx'
import SignUp from './user/pages/SignUp.jsx'
import SignIn from './user/pages/SignIn.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainNavigation />
      <main className='container'>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/:slid/appointments" element={<BookAppointment />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes >
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
