import "./App.css";
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [allBots, setAllBots] = useState([]);

  //fetch data from an external API 
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBots(data);
      }, []);
  });

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy />
      <BotCollection allBots={allBots} />
    </div>
  );
}

export default App;
