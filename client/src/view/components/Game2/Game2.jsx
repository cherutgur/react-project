import React, { useEffect, useState } from 'react'
// import '../Game2/Game2.scss'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useTranslation } from 'react-i18next';



// components
import GameOver from '../GameOver/GameOver'
import RatingTable from '../RatingTable/RatingTable'

let sequence = [];
let sequenceCopyArray = [];
let originalRecord;

function Game2({ user, level, setUser }) {


  useEffect(() => {

    if (user.constructor === Object && Object.keys(user).length === 0) {
      let userName = document.cookie.split('=')[1];

      fetch('/getUserDataByName', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName })
      })
        .then(response => response.json())
        .then(({userData}) => {
          setUser(userData)

          // setRecord(data.userData.record1)
          // originalRecord = data.userData.record1;
        });

    }

    // if (user = {}) {
  }, [])




  const { t } = useTranslation();
  const [canStartOver, setCanStartOver] = useState(true)
  const [flashColor, setFlashColor] = useState('')
  const [activeButton, setActiveButton] = useState(false)
  // const [arrows, setArrows] = useState(false)
  const [timer, setTimer] = useState(level)
  const [runTimer, setRunTimer] = useState(false)
  const [record, setRecord] = useState();
  const [highestResult, setHighestResult] = useState(0);
  const [gameOver, setgameOver] = useState(false);

  const classNames = require('classnames');

  useEffect(() => {
    if(level===15){
      setRecord(user.record1)
      originalRecord = user.record1;
    }else if(level===10){
      setRecord(user.record2)
      originalRecord = user.record2;
    }else if(level===5){
      setRecord(user.record3)
      originalRecord = user.record3;
    }

  
  }, [user])

  const handleStartGame = (e) => {
    if (!canStartOver) return;
    setCanStartOver(false)
    startRounds()
  }

  const startRounds = async () => {

    setTimer(level)
    setActiveButton(false)
    sequence = [...sequence, getRandomColor()]

    for (const color of sequence) {
      await flashAndPlayAudio(color, 250);
    }

    sequenceCopyArray = [...sequence];

    setActiveButton(true);
    setRunTimer(true)
  }

  useEffect(() => {
    if (!runTimer) { return };
    if (timer <= 0) {
      setgameOver('time`s up')
      return
    };
    const id = setTimeout(() => {
      setTimer(timer - 1)
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [timer, runTimer])

  const getRandomColor = () => {
    const colors = [
      "blue", 'green', 'red', 'yellow'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const flashAndPlayAudio = (color, timeOut) => {

    return new Promise((resolve, reject) => {

      setTimeout(() => {
        setFlashColor(color)
        setTimeout(() => {
          setFlashColor('')
          resolve()
        }, 250);
      }, timeOut);

      let audio;
      switch (color) {
        case 'red':
          audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
          audio.play();
          break;
        case 'blue':
          audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
          audio.play();
          break;
        case 'green':
          audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
          audio.play();
          break;
        case 'yellow':
          audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
          audio.play();
          break;
        default:
      }
    })
  }

  const handleColorBtnClick = (e) => {
    if (!activeButton) { return };
    let clickedColor = e.currentTarget.id;
    checkClick(clickedColor);
  }



  async function checkClick(clickedColor) {

    let expectedClick = sequenceCopyArray.shift();

    if (expectedClick === clickedColor) {
      flashAndPlayAudio(clickedColor, 200);

      if (sequenceCopyArray.length === 0) {        // when the user finished the sequence;
        setRunTimer(false)
        setHighestResult(sequence.length)

        // if (sequence.length > highestResult) { // updating the highestResult
        //   setHighestResult(sequence.length)
        // }
        if (sequence.length > record) { // updating the highestResult
          setRecord(sequence.length)
          
        updateRecord(user.userName, sequence.length,level)

        }

        setTimeout(() => { // start new round
          startRounds()
        }, 1000);
      }
    } else {

      setTimer(level)
      setRunTimer(false)
      setgameOver('wrong color')
      setActiveButton(false);
      setCanStartOver(true)
      sequence = [];
    }

  }

  const updateRecord = (userName, record,level) => {
    fetch('/updateRecord', {
      method: 'put',
      body: JSON.stringify({
        userName,
        newRecord: record,
        level
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
  }

  //classNames

  const startButtonClassNames = classNames(
    'start',
    { 'notActive': !canStartOver }
  );

  const blueButtonClassNames = classNames(
    { 'blueFlash': activeButton && flashColor === 'blue' },
    { 'button blue': activeButton && flashColor !== 'blue' },
    { 'blueFlash': !activeButton && flashColor === 'blue' },
    { 'button blue notActive': !activeButton && flashColor !== 'blue' },
  );

  const redButtonClassNames = classNames(
    { 'redFlash': activeButton && flashColor === 'red' },
    { 'button red': activeButton && flashColor !== 'red' },
    { 'redFlash': !activeButton && flashColor === 'red' },
    { 'button red notActive': !activeButton && flashColor !== 'red' },
  );

  const greenButtonClassNames = classNames(
    { 'greenFlash': activeButton && flashColor === 'green' },
    { 'button green': activeButton && flashColor !== 'green' },
    { 'greenFlash': !activeButton && flashColor === 'green' },
    { 'button green notActive': !activeButton && flashColor !== 'green' },
  );

  const yellowButtonClassNames = classNames(
    { 'yellowFlash': activeButton && flashColor === 'yellow' },
    { 'button yellow': activeButton && flashColor !== 'yellow' },
    { 'yellowFlash': !activeButton && flashColor === 'yellow' },
    { 'button yellow notActive': !activeButton && flashColor !== 'yellow' },
  );






  return (
    <>
      {
        gameOver ?
          <GameOver gameOverReason={gameOver} setCanStartOver={setCanStartOver} setgameOver={setgameOver} setHighestResult={setHighestResult} />
          :
          <>
          <div className='wrrapper'>
            <h1 className='wrrapper__title'>{t('gamePage.Hello')} {user.userName}</h1>
            <h3 className='wrrapper__info'>{t('gamePage.highestResult1')} {record}</h3>
            <h3 className='wrrapper__info'>{t('gamePage.highestResult2')} {highestResult} </h3>

       

            <Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}>
              <button onClick={() => sequence = []} type='submit' className='backButton button'>
                {t('gamePage.backBtn')}
              </button>
            </Link>
            <RatingTable record={record} userName={user.userName} level={level} />


          </div>

<div className='board'>
<div id='blue' className={blueButtonClassNames} onClick={handleColorBtnClick}  ></div>
<div id='yellow' className={yellowButtonClassNames} onClick={handleColorBtnClick}  ></div>
<div id='red' className={redButtonClassNames} onClick={handleColorBtnClick}  ></div>
<div id='green' className={greenButtonClassNames} onClick={handleColorBtnClick} ></div>
<div className={startButtonClassNames} onClick={handleStartGame}>
  {t('gamePage.start')}
  <div className='timer'>{timer}</div>
</div>
</div>
</>
      }

    </>
  )
}

export default Game2

