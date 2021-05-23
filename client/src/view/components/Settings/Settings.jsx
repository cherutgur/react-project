import React, { useState } from 'react';
// import './Settings.scss';
import {
  useHistory
} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Settings({ setLevel, setUser }) {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const [error, setError] = useState(false)



  const changLang = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.children.userName.value;
    let password = e.target.children.password.value;
    console.log(password);
    document.cookie = `userName=${userName}`;
    getUserDetailsOrCreateNewUser(userName, password);

    // history.push("/simon");
  }



  const getUserDetailsOrCreateNewUser = async (userName, password) => {

    await fetch('/validatUserName', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
    })
      .then(response => response.json())
      .then((data) => {
        if (data.userData) {
          setUser(data.userData);
          history.push("/simon");
        } else { setError(true) }
      });
  }


  return (

    <div className='settingsForm'>
      <form onSubmit={handleSubmit}>

        <h1 className='settingsForm__title'>{t('settingPage.title')}</h1>

        {/* <div className='settingsForm__login'> */}
        <h3 className='loginSection__description'>{t('settingPage.playAs')}</h3>
        <input className='loginSection__input'
          type='text'
          placeholder={t('settingPage.placeholder')}
          name='userName'
          required
        />
        <input className='loginSection__input'
          type='password'
          placeholder={t('settingPage.placeholder2')}
          name='password'
          required
        />
        <p className='loginSection__errMesagge'>
          {error ? t('settingPage.loginError') : null}
        </p>


        <div className='settingsForm__radio'>

          <div className='lang'>
            <h3>{t('settingPage.lang')}</h3>
            <label htmlFor="English">{t('settingPage.English')}
            <input
              type="radio"
              name='language'
              value='English'
              id='English'
              // checked={true}
              onChange={() => changLang('en')}
            />
            </label>
            <label htmlFor="Hebrew">{t('settingPage.Hebrew')}
            <input
              type="radio"
              name="language"
              value='Hebrew'
              id="Hebrew"
              onChange={() => changLang('hi')}
            />
            </label>
          </div>

          <div className='level'>
            <h3>{t('settingPage.difficultyLevel')}</h3>

            <div className='level__btns'>
              <div >
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
            </div>
          </div>
        </div>

        <button type='submit'className='button'>{t('settingPage.play')}</button>

      </form>
      <img src='../../../../../logo1.png' alt='simonImg'></img>
    </div>

  )
}

export default Settings;
