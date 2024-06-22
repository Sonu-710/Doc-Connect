import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Users from './user/pages/Users.jsx'
import Appointment from './drs/pages/Appointment.jsx'
import Doctors from './drs/pages/Doctors.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes >
    </BrowserRouter>
  </React.StrictMode>,
)
