import React, {useState,useEffect} from 'react';
import './Game.scss';

let sequence = [];
let sequence2= [];


let canClick = false;
let time1 = 15;
let canStartOver = true;


function Game({language}) {


  const [time, setTime] = useState(time1);
  const [flashColor, setFlashColor] = useState('');
  const [gameOver, setgameOver] = useState(false);
  let myVar;


  


  const getRandomControler = () => {


   
   

    const controlers = [
     "blue", 'green', 'red', 'yellow'
    ]

    return controlers[Math.floor(Math.random() * controlers.length)]
  }

  function startByButton(){
    canStartOver=false;
    startGame()
  }
  

  const startGame = async () => {
    console.log('starting');
    // e.target.removeEventListener('click', startGame);
    
    time1=16
    canClick = false;
    

    


    // const sequence = controlers[Math.floor(Math.random() * controlers.length)]
    // console.log(sequence);
    sequence = [...sequence, getRandomControler()]
      console.log(sequence);

    for (const color of sequence) {
      await flashAndPlayAudio(color,1000);
 
    }

    

   sequence2 = [...sequence];
    // flashAndPlayAudio(sequence)
    
    canClick = true;
  
    


   myVar = setInterval(myTimer, 1000);

   function myTimer() {
    if(time1===0 || sequence2.length===0 || gameOver){
      clearInterval(myVar);
      if(time1===0){
        setgameOver(true)
      }
     //  alert('game over. start a new game?');
     //  canClick = false;
     //  sequence = [];
  
    }
     
     time1 = time1-1

       setTime(time1) 
    
   }

  // function myStopFunction() {

  // }

  //   setInterval(() => {
     
  //   }, 1000);

  //   if(time1===10) clearInterval();
   
  }

  // function check(expectedColor,clickedControler){
  //   if(expectedColor===clickedControler){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }

 
   
 



async function clickControler(e){



   if(!canClick) return;
  // let first = sequence2.shift();
  // console.log(first);
  // console.log(sequence2);
  let clickedControler = e.currentTarget.id;
  console.log({clickedControler});

  // console.log(sequence);

    let expectedClick = sequence2.shift();
    console.log({expectedClick});
  
    if(expectedClick===clickedControler){
          console.log(true);
          console.log(sequence2)
          if(sequence2.length===0){
            console.log(('סיימתיאתהרצף'));

  
           
            startGame()
          }
        }else {
          // alert('game over. start a new game?');
          setgameOver(true)
          canClick = false;
          sequence = [];

          return
        }
  // sequence.forEach(color =>{
  //   let correct = await check(color,clickedControler);
  // })


 
 

  // flashAndPlayAudio(clickedControler,500)
  // console.log(sequence);


  // if (expectedClick === clickedControler) {
  //   alert('תואם')
  // }
}



function flashAndPlayAudio(color,timeOut){

  return new Promise((resolve,rej)=>{
    // let audio = new Audio(color.dataset.audio)
    // audio.play();
    
    setTimeout(() => {
     setFlashColor(color)
      setTimeout(() => {
        setFlashColor('')
        resolve()
      }, 250);
    }, timeOut);

  })


}

const startAgain = () =>{
  console.log('ghg');
  setgameOver(false) ;
  canStartOver=true

}



  // console.log(language)
  return (
  <>
  {
    gameOver?
    <div>
      <h1>game over</h1>
      <button onClick={startAgain}>new game</button>
      <button>see my score</button>
    </div>
    : <div></div>
  }
  <div className='timer'>{time}</div>
  <div className='board'>
    <div className='start' onClick={canStartOver?startByButton:null}>
      {language.startBtn}
    </div>
    <div className='row'>
      <div id='blue' className={flashColor==='blue'?"button flash":'button blue'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'></div>
      <div id='red' className={flashColor==='red'?"button flash":'button red'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'></div>
    </div>
    <div className='row'>
      <div id='yellow' className={flashColor==='yellow'?"button flash":'button yellow'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'></div>
      <div id='green' className={flashColor==='green'?"button flash":'button green'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'></div>
    </div>
  </div>
  </>);
}

export default Game;

