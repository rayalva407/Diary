import React from 'react'

function Home() {
  return (
    <div className="container text-center vh-100">
      <h1>Welcome to Your Diary</h1>
      <a href="/login">Log in</a>
      <p>Or</p>
      <a href="/signup">Sign Up</a>
    </div>
  )
}

export default Home