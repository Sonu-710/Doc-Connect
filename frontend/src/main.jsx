import React, { useState, useCallback } from 'react'
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
import { AuthContext } from './shared/context/auth-context.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
