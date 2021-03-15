import React, { useEffect } from 'react';
import './Login.scss';
import {
  Link,
} from "react-router-dom";

function Login({ user, setUser, selectedOption, setSelectedOption, loginUser }) {

  useEffect(() => {

    fetch('/getData')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }, [])

  function onUserNameValueChange(e) {
    document.cookie = `username=${e.target.value}`;
  }

  return (
    <div className='loginForm'>
      <form >

        <h1>Welcome to the simon game</h1>
      
        <h3>play as</h3>
        <input type='text' placeholder='enter username' name='userName' required onChange={onUserNameValueChange} />

        <h3>Select a difficulty level</h3>
        <div className="radio">
          <label>
            <input
              value='easy'
              name='Difficulty'
              type="radio"
              required
            />
           easy (15 min)
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name='Difficulty'
              type="radio"
              value="medium"
            />
            medium (10 min)
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              name='Difficulty'
              type="radio"
            />
            Hard (5 min)
          </label>
        </div>

        <button type='submit'><Link to="/simon" style={{ 'text-decoration': 'none', 'color': 'black' }}> play</Link></button>

      </form>
    </div>
  )
}

export default Login;
