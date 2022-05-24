import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Signup() {



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const student = {username, password};
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(student)
    })
    .then(() => {
      setUsername('')
      setPassword('')
      navigate("/login")
    })
  }

  return (
    <div className="container text-center vh-100">
        <form className="d-flex flex-column m-3">
          <h1 className="h1">Sign Up</h1>
          <label htmlFor="username" className="form-label p-3">Username</label>
          <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" required />
          <label htmlFor="password" className="form-label p-3">Password</label>
          <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
          <input type="submit" value="Submit" className="form-control btn btn-primary mt-4" onClick={handleClick}  />
        </form>
    </div>
  )
}

export default Signup