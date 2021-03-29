import React, { useEffect } from 'react';
import './Settings.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// let level = '';
// let lang;

function Settings({setUserName,setLanguage,setLevel}) {
  // user, setUser, selectedOption, setSelectedOption, loginUser


  useEffect(() => {

    fetch('/getData')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }, [])

  return (

    <div className='settingsForm'>
    <form>
      <h1>Welcome to the simon game settings</h1>
      <label>choose lang2uage</label>
      <br></br>
      <input 
        type="radio" 
        name='language' 
        value='English' 
        id='English'
        checked={true}
        onChange={()=>setLanguage('English')}
        />
      <label htmlFor="English">English</label>
      <input 
        type="radio" 
        name="language" 
        value='Hebrew' 
        id="Hebrew"
        onChange={()=>setLanguage('Hebrew')}
        />
      <label htmlFor="Hebrew">Hebrew</label>
      <h3>play as</h3>
      <input 
        type='text' 
        placeholder='enter username' 
        name='userName' 
        required
        onChange={(e)=>setUserName(e.target.value)}
        />
      <h3>Select a difficulty level</h3>
      <div className="level">
        <label>
          <input
            value='easy'
            name='Difficulty'
            type="radio"
            required
            checked={true}
            onChange={()=>setLevel(15)}
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
            // checked={level==='medium'}
            onChange={()=>setLevel(10)}
          />
          medium (10 min)
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            name='Difficulty'
            type="radio"
            value="hard"
            // checked={level==='hard'}
         onChange={()=>setLevel(5)}
          />
          Hard (5 min)
        </label>
      </div>
      <button type='submit'><Link to="/simon" style={{ 'textDecoration': 'none', 'color': 'black' }}> play</Link></button>
    </form>
  </div>

    // <div className='settingsForm'>
    //   <form >
    //     <h1>Welcome to the simon game</h1>
    //     <h3>play as</h3>
    //     <input type='text' placeholder='enter username' name='userName' required onChange={onUserNameValueChange} />
    //     <h3>Select a difficulty level</h3>
    //     <div className="radio">
    //       <label>
    //         <input
    //           value='easy'
    //           name='Difficulty'
    //           type="radio"
    //           required
    //         />
    //        easy (15 min)
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           name='Difficulty'
    //           type="radio"
    //           value="medium"
    //         />
    //         medium (10 min)
    //       </label>
    //     </div>
    //     <div className="radio">
    //       <label>
    //         <input
    //           name='Difficulty'
    //           type="radio"
    //         />
    //         Hard (5 min)
    //       </label>
    //     </div>
    //     <button type='submit'><Link to="/simon" style={{ 'text-decoration': 'none', 'color': 'black' }}> play</Link></button>

    //   </form>
    // </div>
  )
}

export default Settings;
