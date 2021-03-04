import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  useEffect(() => {
 
      fetch('/getData')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
      })
  }, [])

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
