import React, {  useState } from "react";
// import './App.scss';
import './style/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import Game from './view/components/Game/Game'
import Game2 from './view/components/Game2/Game2'
import Settings from './view/components/Settings/Settings'



function App() {


  const [userName,setUserName] = useState('');
  const [user,setUser] = useState({});
  const [language,setLanguage] = useState('English');
  const [level,setLevel] = useState(15);
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
            <Game2 user={user} level={level} setUser={setUser}/>
            {/* <Game states={{user,userName,language,level,setUserName,setLanguage,setLevel}} level={level} setLevel={setLevel} /> */}
          </Route>
          <Route path="/">
            <Settings setUserName={setUserName} setLanguage={setLanguage} setLevel={setLevel} setUser={setUser}/>
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