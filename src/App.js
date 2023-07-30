import "./App.css";
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [allBots, setAllBots] = useState([]);

  //fetch data from an external API 
  useEffect(() => {
    fetch("https://main-json.onrender.com/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBots(data);
      }, []);
  });

  function deleteBot(id) {
    const deleteData = allBots.filter((deleteBotData) => deleteBotData.id !== id);
    setAllBots(deleteData)
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy />
      <BotCollection allBots={allBots} onDeleteBots={deleteBot}/>
    </div>
  );
}

export default App;
