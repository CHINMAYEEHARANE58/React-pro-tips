import React from 'react'
import {Route,Routes, BrowserRouter} from "react-router-dom"
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import About from './Pages/About'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App