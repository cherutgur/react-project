import React, { useEffect, useState, useCallback } from 'react'
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

    console.log('7777777');
    console.log(user);
    if (user.constructor === Object && Object.keys(user).length === 0) {
      let userName = document.cookie.split('=')[1];
      
    console.log(userName);
    console.log('8888888');


      fetch('/getUserDataByName', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName })
      })
        .then(response => response.json())
        .then(({userData}) => {
          // console.log(data);
          console.log(userData);
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
    console.log(sequence);

    for (const color of sequence) {
      await flashAndPlayAudio(color, 250);
    }

    sequenceCopyArray = [...sequence];

    setActiveButton(true);
    setRunTimer(true)
  }

  useEffect(() => {
    if (!runTimer) { console.log('timer stop'); return };
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
    if (!activeButton) { console.log('butoons not active'); return };
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
      console.log('wrong color');

      // if (record > originalRecord) {
      //   console.log(('נשבר שיא'));
      //   updateRecord(user.userName, record)
      // }

      setTimer(level)
      setRunTimer(false)
      setgameOver('wrong color')

      // setgameOver('you chose the wrong color')
      // let currentResult = sequence.length - 1;
      // if (currentResult > highestResult) {
      //   setHighestResult(currentResult)
      // }


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
      .then(data => { console.log(data); console.log('update') })
  }

  // const togglePlayWithArrows = (e) => {
  //   if (e.target.checked) {
  //     setArrows(true)
  //     console.log('arrows');
  //   } else {
  //     setArrows(false)
  //     console.log('mouse');
  //   }
  // }

  // useCallback(
  //   () => {
  //     callback
  //   },
  //   [input],
  // )
  //   const handleArrows = (e) => {
  //     console.log({arrows});
  //     if( !arrows) return;
  //      console.log(e.key);
  //   }
  //   console.log({arrows});


  // console.log({activeButton});
  // window.addEventListener('keydown', handleArrows);

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
  // console.log(blueButtonClassNames);
  // console.log(redButtonClassNames);
  // console.log(greenButtonClassNames)
  // console.log(yellowButtonClassNames);





  return (
    <>
      {
        gameOver ?
          <GameOver gameOverReason={gameOver} setCanStartOver={setCanStartOver} setgameOver={setgameOver} setHighestResult={setHighestResult} />
          :
          <div className='wrrapper'>
            <h1 className='wrrapper__title'>{t('gamePage.Hello')} {user.userName}</h1>
            <h3 className='wrrapper__info'>{t('gamePage.highestResult1')} {record}</h3>
            <h3 className='wrrapper__info'>{t('gamePage.highestResult2')} {highestResult} </h3>

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

            <Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}>
              <button onClick={() => sequence = []} type='submit' className='backButton button'>
                {t('gamePage.backBtn')}
              </button>
            </Link>
            <RatingTable record={record} userName={user.userName} level={level} />


          </div>
      }
      {/* <label htmlFor="arrow"> play with arrows</label>
      <input
        type="checkbox"
        id="arrow"
        name="arrow"
        value="arrow"
        onChange={togglePlayWithArrows}
        // onChange={(e)=>{(e.target.checked&&activeButton)?console.log('יאפ'):console.log('nop');}}
      /> */}

    </>
  )
}

export default Game2

// import React, { useState,useCallback,useEffect } from 'react'

// function Game2() {

//   const [state1, setstate1] = useState(false);

//   function handleClick() {
//     setstate1(!state1)
//   }

//   function handleCheckBox(e) {
//     // e.preventDefault();
//     if(e.target.checked ){
//       document.addEventListener('keypress',handleKeydown);
//       console.log('addEventListener');
//     }else{
//       document.removeEventListener('keypress',handleKeydown);
//       console.log('removeEventListener');
//     }
//   }


//   const handleKeydown = useCallback( (e) => {
//     e.preventDefault();
//     console.log(state1);
//     if(state1){
//       console.log(e.key);
//     }else{
//       console.log('state false');
//     }
//   },[])

//   const [timer, setTimer] = useState(10)

//   useEffect(() => {
//     if(timer<=0){console.log('time`s up'); return};
//     const id = setInterval(() => {
//       setTimer(timer-1) 
//     }, 1000);
//     return () => {
//       clearInterval(id);
//     };
//   }, [timer])

//   function change(e){
//     console.log(e.target.value);

//   }

//   function click(e) {
//     setTimer(10)
//   }


//   return (
//     <>
//       <button onClick={click}>timer</button>
//       <input type='string' onChange={change}></input>
//       <div>{timer}</div>;

//       <button onClick={handleClick}>toggle state</button>
//       <button onClick={handleKeydown}>handleKeydown</button>
//       <h1>{state1?'true':'false'}</h1>
//       {/* {console.log(state)} */}

//       <label htmlFor="arrow"> add keydown listener</label>
//      <input
//          type="checkbox"
//          id="arrow"
//          name="arrow"
//          value="arrow"
//          onChange={handleCheckBox}
//       />
//     </>
//   )
// }

// export default Game2

