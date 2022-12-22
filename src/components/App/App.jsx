import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App