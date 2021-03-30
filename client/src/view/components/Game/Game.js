import React, {useState,useEffect} from 'react';
import './Game.scss';
import { useTranslation } from 'react-i18next';

let sequence = [];
let sequenceCopyArray= [];
let time1 = 15;
let yy=5;

function Game( {states,selectedOption,setSelectedOption,loginUser}) {

  const { t, i18n } = useTranslation();
  const {userName,language,level,setUserName,setLanguage,setLevel} = states;
 
  const [time, setTime] = useState('--');
  const [flashColor, setFlashColor] = useState('');
  const [gameOver, setgameOver] = useState(false);
  const [canClick, setCanClick] = useState(false);
  const [canStartOver, setCanStartOver] = useState(true);

  const [highestResult, setHighestResult] = useState(0);
  let timeInterval;

  function startByButton(){
    setCanStartOver(false)
    startGame()
  }

  const startGame = async () => {
    setTime(level);


    setTimeout(() => {
      console.log(time);
    }, 1000);
    // setInterval(()=>{
    //   // yy=level;
    //   // yy=yy-1;
      
    //   setTime(time-1)
    // }
     
    // , 1000) 
    // time1=16
    setCanClick(false) ;
    sequence = [...sequence, getRandomControler()]
    console.log(sequence);

    for (const color of sequence) {
      await flashAndPlayAudio(color,250);
    }

   sequenceCopyArray = [...sequence];
    setCanClick(true) ;
    
  //  timeInterval = setInterval(myTimer, 1000);

  //  function myTimer() {
  //   time1 = time1-1;
  //   setTime(time1); 
  //   if(time1===0 || sequenceCopyArray.length===0 || gameOver===true){
  //     clearInterval(timeInterval);
  //     if(time1===0){
 
  //       setgameOver(true);
  //       time1=15;


  //       let currentResult = sequence.length-1;
  //       if(currentResult>highestResult){
  //         setHighestResult(currentResult)
  //       }

  //       // currentResult>highestResult ? setHighestResult(currentResult) : null
          
 
  //     // setUserRecord(sequence.length);
   

        

  //     }
  //   }
  //  }
  }
 
  const getRandomControler = () => {
    const controlers = [
     "blue", 'green', 'red', 'yellow'
    ]

    return controlers[Math.floor(Math.random() * controlers.length)]
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

  
async function clickColor(e){

   if(!canClick) return;
    let clickedControler = e.currentTarget.id;
    console.log({clickedControler});
    let expectedClick = sequenceCopyArray.shift();
    console.log({expectedClick});
  
    if(expectedClick===clickedControler){
          console.log(true);
          console.log(sequenceCopyArray)
          if(sequenceCopyArray.length===0){
            console.log(('סיימתיאתהרצף'));

            if(sequence.length>highestResult){
              setHighestResult(sequence.length)
            }
            
            setTimeout(() => {
              startGame()
            }, 2000);
          }
    }else{
      setgameOver(true)
      let currentResult = sequence.length-1;
      if(currentResult>highestResult){
        setHighestResult(currentResult)
      }
  
          setCanClick(false);
          sequence = [];
          time1=15;
          return;
    }

    flashAndPlayAudio(clickedControler,200);
}



function flashAndPlayAudio(color,timeOut){

  return new Promise((resolve,rej)=>{

    setTimeout(() => {
     setFlashColor(color)
      setTimeout(() => {
        setFlashColor('')
        resolve()
      }, 250);
    }, timeOut);

    let audio;
    switch(color) {
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

const startAgain = () =>{
  console.log('new game');
  sequence=[];
  setgameOver(false) ;
  clearInterval(timeInterval);
  setTime('--')
  setCanStartOver(true)
}

// return(
//   <>
//   <h1>username:{userName}</h1>
//   <h1>language:{language}</h1>
//   <h1>level:{level}</h1>
//   </>
// )
  return (
  <>
  {
    gameOver?
    <div className='gameOver'>
      <h1>{t('gameOverPage.gameOver')}</h1>
      <div className='buttons'>
      <button onClick={startAgain}>{t('gameOverPage.newGame')}</button>
      {/* <button>see my score</button> */}
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
    <div id='blue' className={canClick?flashColor==='blue'?"blueFlash":'button blue':flashColor==='blue'?"blueFlash":'button blue notActive'} onClick={clickColor}  ></div>
    <div id='yellow' className={canClick?flashColor==='yellow'?"yellowFlash":'button yellow':flashColor==='yellow'?"yellowFlash":'button yellow notActive'} onClick={clickColor}  ></div>
    <div id='red' className={canClick?flashColor==='red'?"redFlash":'button red':flashColor==='red'?"redFlash":'button red notActive'} onClick={clickColor}  ></div>
    <div id='green' className={canClick?flashColor==='green'?"greenFlash":'button green':flashColor==='green'?"greenFlash":'button green notActive'} onClick={clickColor}  ></div>
    <div className={canStartOver?'start':'start notActive'}  onClick={canStartOver?startByButton:null}>
      {language.startBtn}
      {t('gamePage.start')} 
      <div className='timer'>{time}</div>
    </div>
  </div>


  </>
  }
  </>);
}

export default Game;

