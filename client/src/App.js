import React, {  useState } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import Game from './view/components/Game/Game'
import Login from './view/components/Login/Login'

let loginUser;

function App() {

  
  const [selectedOption,setSelectedOption] = useState();
  const [user,setUser] = useState('אני');

  const English = {
    title: 'simon game',
    routerGame: 'game',
    routerSettings: 'settings',
    startBtn: 'start'
  }

  // const Hebrew = {
  //   title: 'משחק סיימון',
  //   routerGame: 'משחק',
  //   routerSettings: 'הגדרות',
  //   startBtn: 'התחל'
  // }

  const [language, setlanguage] = useState(English);

  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/simon">
            <Game language={language} user={user} setUser={setUser} selectedOption={selectedOption} setSelectedOption={setSelectedOption} loginUser={loginUser}/>
          </Route>
          <Route path="/">
            <Login user={user} setUser={setUser} selectedOption={selectedOption} setSelectedOption={setSelectedOption} loginUser={loginUser}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;












// הזמנים שיהיו נכונים בכל מצב דילאי
//  הגדרות שמאפשרות לשלוט בטיימר,בשפה ואולי גם אם יהיה משחק קשיח או לא
//חיבורלדטאבייס,חיבור עם שם משתמש ושמירת השיא
//סידור הקודד,שמות קריאים
//טיימר למהלא ביוז סטייט

//איךאפשרלעשות כמהיוזסטיטים לclassName