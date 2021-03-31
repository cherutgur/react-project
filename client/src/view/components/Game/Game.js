import React, { useState, useEffect } from 'react';
import './Game.scss';
import { useTranslation } from 'react-i18next';

let sequence = [];
let sequenceCopyArray = [];


function Game({ states }) {

  const { t, i18n } = useTranslation();
  let { userName, language, level, setUserName, setLanguage, setLevel } = states;
  const [timer, setTimer] = useState(level);
  const [flashColor, setFlashColor] = useState('');
  const [gameOver, setgameOver] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const [canStartOver, setCanStartOver] = useState(true);
  const [highestResult, setHighestResult] = useState(0);
  let timeInterval;


  function startByButton() {
    setCanStartOver(false) //Disable the restart option by the start button
    startGame()
  }

  const startGame = async () => {

    //The computer produces a sequence of colors and displays it
    setCanClick(false); //to disable the option to click the colors while the sequence is running
    sequence = [...sequence, getRandomColor()]
    console.log(sequence);

    for (const color of sequence) {
      await flashAndPlayAudio(color, 250);
    }

    sequenceCopyArray = [...sequence];
    setCanClick(true);
 
    //timer
    //When the computer finishes displaying the sequence, the timer starts running and stops by some conditions
     timeInterval = setInterval(myTimer, 1000);
    let updateTime = level;
    function myTimer() {
      updateTime = updateTime - 1;
      setTimer(updateTime);
      if (updateTime === 0 || sequenceCopyArray.length === 0 || gameOver === 'you chose the wrong color') {
        console.log({gameOver});
        clearInterval(timeInterval);
        setTimer(level);
        if (updateTime === 0) {
          setgameOver('tim`s up');
          let currentResult = sequence.length - 1;
          if (currentResult > highestResult) {
            setHighestResult(currentResult)
          }
        }
      }
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

  async function clickColor(e) {

    if (!canClick) return;
    let clickedControler = e.currentTarget.id;
    let expectedClick = sequenceCopyArray.shift();

    if (expectedClick === clickedControler) {
       flashAndPlayAudio(clickedControler, 200);
      if (sequenceCopyArray.length === 0) { // when the user finished the sequence;
        if (sequence.length > highestResult) { // updating the highestResult
          setHighestResult(sequence.length)
        }

        setTimeout(() => { // start new round
          startGame()
        }, 1000);
      }
    } else {
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

    // clearInterval(timeInterval);
    setTimer(level)
    setCanStartOver(true)
    setgameOver(false);
  }




  //   useEffect(() => {
  //     fetch('/getUserLastRecord',{
  //       method: 'post',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({userName})
  //        })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });

  // }, [])

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
          <>
            <div className='info'>
              <h1>{t('gamePage.Hello')} {userName}</h1>
              <h2>{t('gamePage.highestResult1')} {highestResult} </h2>
              <h3>{t('gamePage.highestResult2')} {highestResult} </h3>
            </div>

            <div className='board'>
              <div id='blue' className={canClick ? flashColor === 'blue' ? "blueFlash" : 'button blue' : flashColor === 'blue' ? "blueFlash" : 'button blue notActive'} onClick={clickColor}  ></div>
              <div id='yellow' className={canClick ? flashColor === 'yellow' ? "yellowFlash" : 'button yellow' : flashColor === 'yellow' ? "yellowFlash" : 'button yellow notActive'} onClick={clickColor}  ></div>
              <div id='red' className={canClick ? flashColor === 'red' ? "redFlash" : 'button red' : flashColor === 'red' ? "redFlash" : 'button red notActive'} onClick={clickColor}  ></div>
              <div id='green' className={canClick ? flashColor === 'green' ? "greenFlash" : 'button green' : flashColor === 'green' ? "greenFlash" : 'button green notActive'} onClick={clickColor}  ></div>
              <div className={canStartOver ? 'start' : 'start notActive'} onClick={canStartOver ? startByButton : null}>
                {language.startBtn}
                {t('gamePage.start')}
                <div className='timer'>{timer}</div>
              </div>
            </div>
          </>
      }
    </>);
}

export default Game;

