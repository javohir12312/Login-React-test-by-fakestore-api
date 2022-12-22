import React from 'react'

const Home = () => {

  if(!localStorage.getItem('token')){
    window.location.pathname = '/'
  }

  return (
    <div>Home</div>
  )
}

export default Home