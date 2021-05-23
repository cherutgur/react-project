import React, { useState, useEffect } from 'react';
import './Game.scss';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

let sequence = [];
let sequenceCopyArray = [];
let originalRecord;

function Game({ states }) {

  const { t } = useTranslation();
  let { user, language, level } = states;
  const [timer, setTimer] = useState(level);
  const [flashColor, setFlashColor] = useState('');
  const [gameOver, setgameOver] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const [canStartOver, setCanStartOver] = useState(true);
  const [highestResult, setHighestResult] = useState(0);
  const [record, setRecord] = useState(0);
  const [playWithArrows, setPlayWithArrows] = useState(false);
  let timeInterval;


  useEffect(() => {
    setRecord(user.record1)
    originalRecord = user.record1;
  }, [user])


  function startByButton() {
    setCanStartOver(false) 
    startGame()
  }


  const startGame = async () => {


    setCanClick(false); 
    sequence = [...sequence, getRandomColor()]

    for (const color of sequence) {
      await flashAndPlayAudio(color, 250);
    }

    sequenceCopyArray = [...sequence];

    setCanClick(true)

    timeInterval = setInterval(myTimer, 1000);
    let updateTime = level;

    function myTimer() {
      updateTime = updateTime - 1;
      setTimer(updateTime);

      if (updateTime === 0 || sequenceCopyArray.length === 0 || gameOver === 'you chose the wrong color') {
        clearInterval(timeInterval);
        if (record > originalRecord) {

          updateRecord(user , record)

    
        setTimer(level);
        if (updateTime === 0) {
          setgameOver('time`s up');
          let currentResult = sequence.length - 1;
          if (currentResult > highestResult) {
            setHighestResult(currentResult)
          }

        }
      }
    }
  }

  const updateRecord = (user , record)=>{
    fetch('/updateRecord', {
      method: 'put',
      body: JSON.stringify({
        userName: user.userName,
        newRecord: record
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
   }
  }

  

  const getRandomColor = () => {
    const colors = [
      "blue", 'green', 'red', 'yellow'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function flashAndPlayAudio(color, timeOut) {

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

  const userChoose = (event, color) => {




    if (event.type === 'click') {
      if (!canClick) return;
      let clickedColor = event.currentTarget.id;
      clickColor(clickedColor)


    } else {
      let clickedColor = color;

      clickColor(clickedColor)
    }
  }



  async function clickColor(clickedColor) {

    let expectedClick = sequenceCopyArray.shift();

    if (expectedClick === clickedColor) {
      flashAndPlayAudio(clickedColor, 200);
      if (sequenceCopyArray.length === 0) { // when the user finished the sequence;
        if (sequence.length > highestResult) { // updating the highestResult
          setHighestResult(sequence.length)
        }
        if (sequence.length > record) { // updating the highestResult
          setRecord(sequence.length)
        }

        setTimeout(() => { // start new round
          startGame()
        }, 1000);
      }
    } else {
      if (record > originalRecord) {

        fetch('/updateRecord', {
          method: 'put',
          body: JSON.stringify({
            userName: user.userName,
            newRecord: record
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        })
          .then(response => response.json())
      }


      clearInterval(timeInterval);
      setgameOver('you chose the wrong color')
      let currentResult = sequence.length - 1;
      if (currentResult > highestResult) {
        setHighestResult(currentResult)
      }


      setCanClick(false);
      sequence = [];
    }

  }

  const startAgain = () => {
    sequence = [];
    
    setTimer(level)
    setCanStartOver(true)
    setHighestResult(0)
    setgameOver(false);
    clearInterval(timeInterval);
  }





  const togglePlayWithArrows = (e) => {
    if (e.target.checked) {
      if(canClick){
        setPlayWithArrows(true);
        setCanClick(false)
        window.addEventListener('keydown', addArrows);
      }

    } else {
      setPlayWithArrows(false)
      setCanClick(false)
      window.removeEventListener('keydown', addArrows);
    }
  }

  const addArrows = (event) => {
    let keypress = event.key;
    if (keypress === 'ArrowUp') {
      userChoose(event, 'blue')
      // flashAndPlayAudio('blue', 100)
    }
    else if (keypress === 'ArrowDown') {
      userChoose(event, 'green')
      // flashAndPlayAudio('green', 100)
    }
    else if (keypress === 'ArrowLeft') {
      userChoose(event, 'red')
      // flashAndPlayAudio('red', 100)
    }
    else if (keypress === 'ArrowRight') {
      userChoose(event, 'yellow')
      // flashAndPlayAudio('yellow', 100)
    }
  }


  return (
    <>
      {
        gameOver ?
          <div className='gameOver'>
            <h1>{t('gameOverPage.gameOver')}</h1>
            <h2>{gameOver}</h2>
            <div className='buttons'>
              <button onClick={startAgain}>{t('gameOverPage.newGame')}</button>
            </div>
          </div>
          :
          < >
            <div className='info'>
            <label htmlFor="arrow"> play with arrows</label>
              <input
                type="checkbox"
                id="arrow"
                name="arrow"
                value="arrow"
                onChange={togglePlayWithArrows}
              />
              <h1>{canClick ? 'canClick - true' : 'canClick - false'}</h1>
              <h1>{playWithArrows ? 'playWithArrows - true' : 'playWithArrows - false'}</h1>
              <h1>{t('gamePage.Hello')} {user.userName}</h1>
              <h2>{t('gamePage.highestResult1')} {record}</h2>
              <h3>{t('gamePage.highestResult2')} {highestResult} </h3>
            </div>
            <div className={playWithArrows ? 'board arrow' : 'board'} >
              <div id='blue' className={canClick ? flashColor === 'blue' ? "blueFlash" : 'button blue' : flashColor === 'blue' ? "blueFlash" : 'button blue notActive'} onClick={userChoose}  ></div>
              <div id='yellow' className={canClick ? flashColor === 'yellow' ? "yellowFlash" : 'button yellow' : flashColor === 'yellow' ? "yellowFlash" : 'button yellow notActive'} onClick={userChoose}  ></div>
              <div id='red' className={canClick ? flashColor === 'red' ? "redFlash" : 'button red' : flashColor === 'red' ? "redFlash" : 'button red notActive'} onClick={userChoose}  ></div>
              <div id='green' className={canClick ? flashColor === 'green' ? "greenFlash" : 'button green' : flashColor === 'green' ? "greenFlash" : 'button green notActive'} onClick={userChoose}  ></div>
              <div className={canStartOver ? 'start' : 'start notActive'} onClick={canStartOver ? startByButton : null}>
                {language.startBtn}
                {t('gamePage.start')}
                <div className='timer'>{timer}</div>
              </div>
            </div>

            {/* <div className={playWithArrows ? 'board arrow' : 'board'} >
              <div id='blue' className={canClick ? flashColor === 'blue' ? "blueFlash" : 'button blue' : flashColor === 'blue' ? "blueFlash" : 'button blue notActive'} onClick={userChoose}  ></div>
              <div id='yellow' className={canClick ? flashColor === 'yellow' ? "yellowFlash" : 'button yellow' : flashColor === 'yellow' ? "yellowFlash" : 'button yellow notActive'} onClick={userChoose}  ></div>
              <div id='red' className={canClick ? flashColor === 'red' ? "redFlash" : 'button red' : flashColor === 'red' ? "redFlash" : 'button red notActive'} onClick={userChoose}  ></div>
              <div id='green' className={canClick ? flashColor === 'green' ? "greenFlash" : 'button green' : flashColor === 'green' ? "greenFlash" : 'button green notActive'} onClick={userChoose}  ></div>
              <div className={canStartOver ? 'start' : 'start notActive'} onClick={canStartOver ? startByButton : null}>
                {language.startBtn}
                {t('gamePage.start')}
                <div className='timer'>{timer}</div>
              </div>
            </div> */}
            <div>

            </div>
            <Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}><button type='submit'>{t('gamePage.backBtn')}</button></Link>
          </>
      }
    </>);
}

export default Game;

