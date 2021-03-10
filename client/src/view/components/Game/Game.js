import React, {useState,useEffect} from 'react';
import './Game.scss';



function Game({language}) {

  const getRandomControler = () => {

    let blueControler = document.getElementById("blueControler");;
    let redControler = document.getElementById('redControler');
    let yellowControler = document.getElementById('yellowControler');
    let greenControler = document.getElementById('greenControler');

    const controlers = [
      blueControler,
      redControler,
      yellowControler,
      greenControler
    ]

    return controlers[Math.floor(Math.random() * controlers.length)]
  }

  let sequence;

  const startGame = async () => {
    canClick = false;
    
    

    // const sequence = controlers[Math.floor(Math.random() * controlers.length)]
    // console.log(sequence);
    sequence = [
      getRandomControler(),
    ]
      console.log(sequence[0]);


    for (const controler of sequence) {
      await flashAndPlayAudio(controler,1000)
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

function flashAndPlayAudio(controler,timeOut){

  return new Promise((res,rej)=>{
    let audio = new Audio(controler.dataset.audio)
    audio.play();
    controler.className += 'flash';
    setTimeout(() => {
      controler.className = controler.className.replace('flash', '') ;
      setTimeout(() => {
        res()
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
      <div id='blueControler' className="button blue" onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'></div>
      <div id='redControler' className="button red" onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'></div>
    </div>
    <div className='row'>
      <div id='yellowControler' className="button yellow" onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'></div>
      <div id='greenControler' className="button green" onClick={clickControler} data-audio='https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'></div>
    </div>
  </div>);
}

export default Game;

