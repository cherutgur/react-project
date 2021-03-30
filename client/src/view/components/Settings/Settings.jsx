import React, { useEffect } from 'react';
import './Settings.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

// let level = '';
// let lang;

function Settings({setUserName,setLanguage,setLevel}) {
  // user, setUser, selectedOption, setSelectedOption, loginUser
  const { t, i18n } = useTranslation();

  useEffect(() => {

    fetch('/getData')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });

  }, [])

  function changLang(lang){
    console.log(lang);
    i18n.changeLanguage(lang)
  }

  return (

    <div className='settingsForm'>
    <form>
      <h1>{t('settingPage.title')}</h1>
      <label>{t('settingPage.lang')}</label>
      <br></br>
      <input 
        type="radio" 
        name='language' 
        value='English' 
        id='English'
        // checked={true}
        onChange={()=> changLang('en')}
        // onChange={()=>setLanguage('English')}

        />
      <label htmlFor="English">{t('settingPage.English')}</label>
      <input 
        type="radio" 
        name="language" 
        value='Hebrew' 
        id="Hebrew"
        onChange={()=> changLang('hi')}
        // onChange={()=>setLanguage('Hebrew')}
        />
      <label htmlFor="Hebrew">{t('settingPage.Hebrew')}</label>
      <h3>{t('settingPage.playAs')}</h3>
      <input 
        type='text' 
        placeholder={t('settingPage.placeholder')} 
        name='userName' 
        required
        onChange={(e)=>setUserName(e.target.value)}
        />
      <h3>{t('settingPage.difficultyLevel')}</h3>
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
         {t('settingPage.easy')}
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
                   {t('settingPage.medium')}

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
             {t('settingPage.Hard')}
        </label>
      </div>
      <button type='submit'><Link to="/simon" style={{ 'textDecoration': 'none', 'color': 'black' }}>{t('settingPage.play')}</Link></button>
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
