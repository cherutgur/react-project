import React from 'react';
import './Settings.scss';
import {
  useHistory
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Settings({ setUserName, setLanguage, setLevel, setUser }) {
  // user, setUser, selectedOption, setSelectedOption, loginUser
  const { t, i18n } = useTranslation();
  const history = useHistory();


  const changLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.children.userName.value;
    getUserDetailsOrCreateNewUser(userName);
    history.push("/simon");
  }

  const getUserDetailsOrCreateNewUser = (userName)=> {

    fetch('/validatUserName', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    })
      .then(response => response.json())
      .then(({ userData }) => {
        setUser(userData)

        // setRecord(data.userData.record1)
        // originalRecord = data.userData.record1;
      });
  }


  return (

    <div className='settingsForm'>
      <form onSubmit={handleSubmit}>
        <h1>{t('settingPage.title')}</h1>

        <h3>{t('settingPage.lang')}</h3>
        <label htmlFor="English">{t('settingPage.English')}</label>
        <input
          type="radio"
          name='language'
          value='English'
          id='English'
          onChange={() => changLang('en')}
        />
        <label htmlFor="Hebrew">{t('settingPage.Hebrew')}</label>
        <input
          type="radio"
          name="language"
          value='Hebrew'
          id="Hebrew"
          onChange={() => changLang('hi')}
        />

        <h3>{t('settingPage.playAs')}</h3>
        <input
          type='text'
          placeholder={t('settingPage.placeholder')}
          name='userName'
          required
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
              onChange={() => setLevel(15)}
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
              onChange={() => setLevel(10)}
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
              onChange={() => setLevel(5)}
            />
            {t('settingPage.Hard')}
          </label>
        </div>

        <button type='submit'>{t('settingPage.play')}</button>
        {/* <button type='submit'><Link to="/simon" style={{ 'textDecoration': 'none', 'color': 'black' }}>{t('settingPage.play')}</Link></button> */}
      </form>
    </div>
  )
}

export default Settings;
