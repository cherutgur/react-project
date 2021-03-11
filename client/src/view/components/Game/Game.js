import React, {useState,useEffect} from 'react';
import './Game.scss';

let sequence = [];

function Game({language}) {

  const [flashColor, setFlashColor] = useState('')

  const getRandomControler = () => {


   
   

    const controlers = [
     "blue", 'green', 'red', 'yellow'
    ]

    return controlers[Math.floor(Math.random() * controlers.length)]
  }

  

  const startGame = async () => {
    canClick = false;
    
    

    // const sequence = controlers[Math.floor(Math.random() * controlers.length)]
    // console.log(sequence);
    sequence = [...sequence, getRandomControler()]
      console.log(sequence);


    for (const color of sequence) {
      await flashAndPlayAudio(color,1000)
    }

    canClick = true;

    
    // flashAndPlayAudio(sequence)
  }

  // let clickable = false;

// const flash = (index) => {

//   console.log(index)
//   switch  (index) {
//     case 0:{
//       let btn= document.getElementById('blue')
//       btn.style.border = '10px solid white';
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
//       break;
//     }
//     case 1:{
//       let btn= document.getElementById('red')
//       btn.style.border = '10px solid white';
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
//       break;
//     }
//     case 2:{
//       let btn= document.getElementById('green')
//       btn.style.border = '10px solid white';
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
//       break;
//   }
//     case 3:{
//       let btn= document.getElementById('yellow')
//       btn.style.border = '10px solid white';
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
//       break;
//     }
//     default:
//      console.log('default')
//   }
// }

// const startGame = () => {


//   const sequence = [Math.floor(Math.random() * audios.length)]
//   console.log(sequence);


//   sequence.forEach(randomAudio =>{
//     let audio =  new Audio(audios[randomAudio])
//     audio.play()
//     flash(randomAudio);
//   })
//   // clickable = true;


// }
  
// const playAudio =  (e) => {

//   // audio.play()

//   // if(clickable){
//   //   console.log('true');
//   // }
//   let clickedColor = e.target.id;
//   console.log(clickedColor);
//   if(!clickedColor) throw Error;
//   // setaudio(new Audio(audios[0]))
//   // audio.play()
 
//   let audio;
//   switch  (clickedColor) {
//     case 'blue':{
//       let btn = e.target;
//       console.log(btn);
//       let data = btn.dataset.color;
//       console.log(data);
//       btn.style.border = '10px solid white';

//       audio = new Audio(audios[0])
//       audio.play()
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
     
//       break;
//     }
//     case 'red':{
//       let btn = e.target;
//       console.log(btn);
//       btn.style.border = '10px solid white';
//       audio = new Audio(audios[1])
//       audio.play()
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
     

//       break;
//     }
//     case 'green':{
//       let btn = e.target;
//       console.log(btn);
//       btn.style.border = '10px solid white';
//       audio = new Audio(audios[2])
//       audio.play()
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
     
//       break;
//   }


//     case 'yellow':{
//       let btn = e.target;
//       console.log(btn);
//       btn.style.border = '10px solid white';
//       audio = new Audio(audios[3])
//       audio.play()
//       setTimeout(() => {
//         btn.style.border = '';
//       }, 500);
     
//       break;
//     }

 
//     default:
//      console.log('default')
//   }
// }

 function clickControler(e){
  if(!canClick) return;
  let clickedControler = e.currentTarget;
  flashAndPlayAudio(clickedControler,500)

  let expectedClick = sequence[0];
  console.log(expectedClick);
  if (expectedClick === clickedControler) {
    alert('תואם')
  }
}

let canClick = false;

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



  console.log(language)
  return (
  <div className='board'>
    <div className='start' onClick={startGame}>
      {language.startBtn}
    </div>
    <div className='row'>
      <div id='blueControler' className={flashColor==='blue'?"button flash":'button blue'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'></div>
      <div id='redControler' className={flashColor==='red'?"button flash":'button red'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'></div>
    </div>
    <div className='row'>
      <div id='yellowControler' className={flashColor==='yellow'?"button flash":'button yellow'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'></div>
      <div id='greenControler' className={flashColor==='green'?"button flash":'button green'} onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'></div>
    </div>
  </div>);
}

export default Game;

