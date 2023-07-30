import './App.css';
import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:8001/bots")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  })
  
  return (
    <div className="App">
      <h1>Bot Battlr</h1>
    </div>
  );
}

export default App;
