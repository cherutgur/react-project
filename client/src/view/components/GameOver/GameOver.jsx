import React from 'react'
import '../GameOver/GameOver.scss'
import { useTranslation } from 'react-i18next';

function GameOver({gameOverReason,setgameOver,setCanStartOver,setHighestResult}) {

  const { t } = useTranslation();

  const startAgain = () => {
    // sequence = [];
    
    // setTimer(level)
    setCanStartOver(true)
    setHighestResult(0)
    setgameOver(false);

    // clearInterval(timeInterval);
  }

  

  return (

    <div className='gameOver'>
      <h1>{t('gameOverPage.gameOver')}</h1>
      <h2>
        {gameOverReason==="time`s up"? t('gameOverPage.time`s up') : t('gameOverPage.wrong color')}</h2>
      <div className='buttons'>
        <button onClick={startAgain}>{t('gameOverPage.newGame')}</button>
      </div>
    </div>

  )
}

export default GameOver
