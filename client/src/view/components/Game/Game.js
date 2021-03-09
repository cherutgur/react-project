import React, {useState,useEffect} from 'react';
import './Game.scss';

const audios = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
  'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
]

function Game({language}) {
  
const playAudio = (e) =>{

  // audio.play()
  let clickedColor = e.target.id;
  console.log(clickedColor);
  if(!clickedColor) throw Error;
  // setaudio(new Audio(audios[0]))
  // audio.play()
 
  let audio;
  switch  (clickedColor) {
    case 'blue':
      audio = new Audio(audios[0])
      audio.play()
      break;
    case 'red':
      audio = new Audio(audios[1])
      audio.play()

      break;
    case 'green':
      audio = new Audio(audios[2])
      audio.play()


      break;
    case 'yellow':
      audio = new Audio(audios[3])
      audio.play()


      break;
    default:
     console.log('default')
  }
}

  console.log(language)
  return (
  <div className='board'>
    <div className='start'>
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

