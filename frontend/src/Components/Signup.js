import React from 'react'

function Signup() {
  return (
    <div>
      <div>
        <h1>Log In</h1>
        <form action="#">
          <label htmlFor="username">Username</label>
          <input type="text" name='username' />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Signup