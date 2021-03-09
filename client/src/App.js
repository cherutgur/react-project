import React, { useEffect, useState } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// components
import Game from './view/components/Game/Game'


function App() {

  const English = {
    title: 'simon game',
    routerGame: 'game',
    routerSettings: 'settings',
    startBtn: 'start'
  }

  const Hebrew = {
    title: 'משחק סיימון',
    routerGame: 'משחק',
    routerSettings: 'הגדרות',
    startBtn: 'התחל'
  }

  const [language, setlanguage] = useState(English);

  
  useEffect(() => {
 
      fetch('/getData')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
      })
  }, [])

  function chageLang(){
    setlanguage(Hebrew)
  }

  return (
    <div className="App">
      <h1>{language.title}</h1>
      <button onClick={chageLang} >עברית</button>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{language.routerGame}</Link>
            </li>
            <li>
              <Link to="/settings">{language.routerSettings}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <Game language={language}/>
          </Route>
        </Switch>
    </Router>

    </div>

  );
}

export default App;









function Settings() {
  return (
  <>
  <h2>Settings</h2>
  {/* <img src='' alt='h'></img> */}
  
  </>);
}



