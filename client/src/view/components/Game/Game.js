import React, {useState,useEffect} from 'react';
import './Game.scss';

let sequence = [];
let sequence2= [];

function Game({language}) {

  const [flashColor, setFlashColor] = useState('')

  const getRandomControler = () => {


   
   

    const controlers = [
     "blue", 'green', 'red', 'yellow'
    ]

    return controlers[Math.floor(Math.random() * controlers.length)]
  }

  

  const startGame = async () => {
    // canClick = false;
    
    

    // const sequence = controlers[Math.floor(Math.random() * controlers.length)]
    // console.log(sequence);
    sequence = [...sequence, getRandomControler()]
      console.log(sequence);


    for (const color of sequence) {
      await flashAndPlayAudio(color,1000)
    }

    // canClick = true;

   sequence2 = [...sequence];
    // flashAndPlayAudio(sequence)
  }

  // function check(expectedColor,clickedControler){
  //   if(expectedColor===clickedControler){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // }

async function clickControler(e){

 
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
          console.log('game over');
        }
  // sequence.forEach(color =>{
  //   let correct = await check(color,clickedControler);
  // })

  // if(!canClick) return;
 
 

  // flashAndPlayAudio(clickedControler,500)
  // console.log(sequence);


  // if (expectedClick === clickedControler) {
  //   alert('תואם')
  // }
}

// let canClick = false;

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



  // console.log(language)
  return (
  <div className='board'>
    <div className='start' onClick={startGame}>
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
  </div>);
}

export default Game;

