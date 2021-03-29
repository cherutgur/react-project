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
import Settings from './view/components/Settings/Settings'
import Counter from './view/components/counter'
import Counter2 from './view/components/counter2'


function App() {


  const [userName,setUserName] = useState('');
  const [language,setLanguage] = useState('English');
  const [level,setLevel] = useState('easy');
  const [counter,setCounter] = useState(0);

  return (

    // <div className="App">
    //     <Counter setCounter={setCounter} counter={counter}/>
    //     <Counter2  counter={counter}/>
    // </div>

    <div className="App">
      <Router>
        <Switch>
          <Route path="/simon">
            <Game states={{userName,language,level,setUserName,setLanguage,setLevel}}/>
          </Route>
          <Route path="/">
            <Settings setUserName={setUserName} setLanguage={setLanguage} setLevel={setLevel}/>
            {/* <Login user={user} setUser={setUser} selectedOption={selectedOption} setSelectedOption={setSelectedOption} loginUser={loginUser}/> */}
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