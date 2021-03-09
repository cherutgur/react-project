import React, {useState,useEffect} from 'react';
import './Game.scss';

const audios = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
]

function Game({language}) {

  // let clickable = false;

const flash = (index) => {

  console.log(index)
  switch  (index) {
    case 0:{
      let btn= document.getElementById('blue')
      btn.style.border = '10px solid white';
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
      break;
    }
    case 1:{
      let btn= document.getElementById('red')
      btn.style.border = '10px solid white';
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
      break;
    }
    case 2:{
      let btn= document.getElementById('green')
      btn.style.border = '10px solid white';
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
      break;
  }
    case 3:{
      let btn= document.getElementById('yellow')
      btn.style.border = '10px solid white';
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
      break;
    }
    default:
     console.log('default')
  }
}

const startGame = () => {


  const sequence = [Math.floor(Math.random() * audios.length)]
  console.log(sequence);


  sequence.forEach(randomAudio =>{
    let audio =  new Audio(audios[randomAudio])
    audio.play()
    flash(randomAudio);
  })
  // clickable = true;


}
  
const playAudio =  (e) => {

  // audio.play()

  // if(clickable){
  //   console.log('true');
  // }
  let clickedColor = e.target.id;
  console.log(clickedColor);
  if(!clickedColor) throw Error;
  // setaudio(new Audio(audios[0]))
  // audio.play()
 
  let audio;
  switch  (clickedColor) {
    case 'blue':{
      let btn = e.target;
      console.log(btn);
      btn.style.border = '10px solid white';

      audio = new Audio(audios[0])
      audio.play()
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
     
      break;
    }
    case 'red':{
      let btn = e.target;
      console.log(btn);
      btn.style.border = '10px solid white';
      audio = new Audio(audios[1])
      audio.play()
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
     

      break;
    }
    case 'green':{
      let btn = e.target;
      console.log(btn);
      btn.style.border = '10px solid white';
      audio = new Audio(audios[2])
      audio.play()
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
     
      break;
  }


    case 'yellow':{
      let btn = e.target;
      console.log(btn);
      btn.style.border = '10px solid white';
      audio = new Audio(audios[3])
      audio.play()
      setTimeout(() => {
        btn.style.border = '';
      }, 500);
     
      break;
    }

 
    default:
     console.log('default')
  }
}

  console.log(language)
  return (
  <div className='board'>
    <div className='start' onClick={startGame}>
      {language.startBtn}
    </div>
    <div className='row'>
      <div id='blue' className="button blue" onClick={playAudio} date-color='blue'></div>
      <div id='red' className="button red" onClick={playAudio}></div>
    </div>
    <div className='row'>
      <div id='yellow' className="button yellow" onClick={playAudio}></div>
      <div id='green' className="button green" onClick={playAudio}></div>
    </div>
  </div>);
}

export default Game;

